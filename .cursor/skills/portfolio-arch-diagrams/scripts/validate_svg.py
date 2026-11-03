#!/usr/bin/env python3
"""Validate portfolio SVG architecture diagrams for UTF-8, XML, geometry, and rasterization."""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

SVG_NS = "{http://www.w3.org/2000/svg}"
FORBIDDEN_TOKENS = ("<script", "<foreignObject", "@import", "http://", "https://")
ALLOWED_HTTP = ("http://www.w3.org/2000/svg", "http://www.w3.org/1999/xlink")


def validate_svg_file(path: Path) -> list[str]:
    errors: list[str] = []
    raw = path.read_bytes()

    # 1. Strict UTF-8 check
    try:
        text = raw.decode("utf-8", errors="strict")
    except UnicodeDecodeError as exc:
        errors.append(f"Invalid UTF-8 encoding: {exc}")
        return errors

    # 2. Check for non-ASCII characters that risk encoding issues or missing glyphs
    non_ascii = [(i, ch, ord(ch)) for i, ch in enumerate(text) if ord(ch) > 127]
    if non_ascii:
        sample = ", ".join(f"pos {i} U+{code:04X} ({ch!r})" for i, ch, code in non_ascii[:5])
        errors.append(f"Non-ASCII characters found (use ASCII-safe punctuation): {sample}")

    # 3. Check for bare ampersands
    for match in re.finditer(r"&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)", text):
        pos = match.start()
        snippet = text[max(0, pos - 10) : min(len(text), pos + 20)]
        errors.append(f"Unescaped '&' at pos {pos}: {snippet!r}")

    # 4. Check forbidden external/script tokens (ignoring standard XML namespaces)
    cleaned = text
    for allowed in ALLOWED_HTTP:
        cleaned = cleaned.replace(allowed, "")
    for token in FORBIDDEN_TOKENS:
        if token in cleaned:
            errors.append(f"Forbidden token in <img src> SVG: {token!r}")

    # 5. Strict XML parse & root geometry checks
    try:
        root = ET.fromstring(text)
    except ET.ParseError as exc:
        errors.append(f"XML parse error: {exc}")
        return errors

    if root.tag != f"{SVG_NS}svg":
        errors.append(f"Root tag must be <svg> with xmlns='http://www.w3.org/2000/svg', got {root.tag}")

    if root.attrib.get("viewBox") != "0 0 800 220":
        errors.append(f"Expected viewBox='0 0 800 220', got {root.attrib.get('viewBox')!r}")

    if root.attrib.get("width") != "800" or root.attrib.get("height") != "220":
        errors.append(
            f"Expected width='800' height='220', got width={root.attrib.get('width')!r} height={root.attrib.get('height')!r}"
        )

    title_el = root.find(f"{SVG_NS}title")
    desc_el = root.find(f"{SVG_NS}desc")
    if title_el is None or not (title_el.text or "").strip():
        errors.append("Missing non-empty <title> element")
    if desc_el is None or not (desc_el.text or "").strip():
        errors.append("Missing non-empty <desc> element")

    # 6. Optional rasterizer smoke check via ImageMagick convert
    convert_bin = shutil.which("convert")
    if convert_bin:
        with tempfile.NamedTemporaryFile(suffix=".png", delete=True) as tmp_png:
            proc = subprocess.run(
                [convert_bin, str(path), tmp_png.name],
                capture_output=True,
                text=True,
                check=False,
            )
            if proc.returncode != 0:
                errors.append(f"ImageMagick convert failed: {proc.stderr.strip()}")
            elif Path(tmp_png.name).stat().st_size == 0:
                errors.append("ImageMagick produced an empty PNG")

    return errors


def main() -> int:
    diagrams_dir = Path("public/diagrams")
    svg_paths = sorted(Path(p) for p in sys.argv[1:]) if len(sys.argv) > 1 else sorted(diagrams_dir.glob("*.svg"))

    if not svg_paths:
        print("FAIL: No SVG files found to validate.", file=sys.stderr)
        return 1

    failed = False
    for svg_path in svg_paths:
        errs = validate_svg_file(svg_path)
        if errs:
            failed = True
            print(f"FAIL {svg_path}:")
            for err in errs:
                print(f"  - {err}")
        else:
            print(f"PASS {svg_path} ({svg_path.stat().st_size} bytes, UTF-8, XML, 800x220)")

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())

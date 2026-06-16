// stripComments.mjs
// This script removes JavaScript/JSX/TS/TSX/CSS comments from all files in the src directory.
import fs from 'fs';
import path from 'path';
import strip from 'strip-comments';

const exts = ['.js', '.jsx', '.ts', '.tsx', '.css'];
const srcDir = path.resolve(import.meta.url.replace('file://' , '').replace(/stripComments\.mjs$/, ''), 'src');

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!exts.includes(ext)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  try {
    if (ext === '.css') {
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    } else {
      content = strip(content);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
  } catch (e) {
    console.error(`Failed to process ${filePath}:`, e);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

walk(srcDir);

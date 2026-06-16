const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'src'); // adjust if needed

function isTargetFile(file) {
  return /\.(js|jsx|ts|tsx|css)$/i.test(file);
}

function stripComments(content) {
  // Remove block comments
  let result = content.replace(/\/\*[\s\S]*?\*\//g, '');
  // Remove line comments (except those starting with http:// or https://)
  result = result.replace(/([^:])\/\/.*$/gm, (match, p1) => p1 ? p1 : '');
  return result;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = stripComments(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Processed ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walk(fullPath);
    } else if (dirent.isFile() && isTargetFile(dirent.name)) {
      processFile(fullPath);
    }
  });
}

walk(srcDir);
console.log('Comment stripping completed.');

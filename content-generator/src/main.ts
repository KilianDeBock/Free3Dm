import path from 'path';
import fs from 'fs';

export function getAllMarkdownFiles(): any {
  const files: any = {};
  const getFiles = (dir: string): void => {
    const dirFiles = fs.readdirSync(dir);
    dirFiles.forEach((file) => {
      const newDir = path.join(dir, file);
      if (fs.statSync(newDir).isDirectory()) {
        getFiles(newDir);
      } else if (file.endsWith('.md')) {
        const newFile = path.resolve(newDir);
        const fileContents = fs.readFileSync(newFile, 'utf8');
        const filename = newDir.split('/').pop().split('.').shift();
        if (filename) {
          if (fileContents.endsWith('\n'))
            files[filename] = fileContents.slice(0, -1);
          else files[filename] = fileContents;
        }
      }
    });
  };
  getFiles('./src');
  return files;
}

const contents = getAllMarkdownFiles();
console.log(contents);

export function createMarkdownFile(contents: any): void {
  const _normalExports = [];
  Object.keys(contents).forEach((key) => {
    _normalExports.push(`export const ${key} = \`${contents[key]}\`;`);
  });
  const normalExports = _normalExports.join('\n');

  const defaultExport = `export default ${JSON.stringify(contents, null, 2)};`;

  console.log(normalExports);
  console.log(defaultExport);

  fs.writeFileSync('./src/contents.ts', `${normalExports}\n\n${defaultExport}`);
}

createMarkdownFile(contents);

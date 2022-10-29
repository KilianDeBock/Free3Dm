import fs from 'fs';
import path from 'path';

export function getAllMarkdownFiles(
  startFolder: string,
  prefix: string = '',
  suffix: string = '',
): any {
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
        const fileName = newDir.split('/').pop().split('.').shift();
        const variableName = prefix + fileName + suffix;
        if (variableName) {
          if (fileContents.endsWith('\n'))
            files[variableName] = fileContents.slice(0, -1);
          else files[variableName] = fileContents;
        }
      }
    });
  };
  getFiles(startFolder);
  return files;
}

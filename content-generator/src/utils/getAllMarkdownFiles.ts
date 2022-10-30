import fs from 'fs';
import path from 'path';

export function getAllMarkdownFiles(
  startFolder: string,
  prefix: string = '',
  suffix: string = '',
): any {
  // Set initial files object to return at the end.
  const files: any = {};

  // Build the file getter function.
  const getFiles = (dir: string): void => {
    const dirFiles = fs.readdirSync(dir);
    dirFiles.forEach((rawFilePath) => {
      // Get the file path
      const filePath = path.join(dir, rawFilePath);

      // If it's a directory, call the function again
      if (fs.statSync(filePath).isDirectory()) {
        return getFiles(filePath);
      }

      // Check if the file is markdown.
      if (rawFilePath.endsWith('.md')) {
        // Resolve the file.
        const file = path.resolve(filePath);

        // Get the files content
        const fileContents = fs
          // Get contents
          .readFileSync(file, 'utf8')
          // Remove all Zero Width No-Break Space characters ( https://www.compart.com/en/unicode/U+FEFF )
          .replaceAll('﻿', '');

        // Get the name of the file.
        const fileName = filePath
          // Remove all path structure
          .split('/')
          .pop()
          // Remove the file extension or sub extensions
          .split('.')
          .shift();

        // Set variable name
        const variable = prefix + fileName + suffix;

        // Set variable to the main object
        files[variable] = fileContents.endsWith('\n')
          ? // If the string ends with a new line, remove it
            fileContents.slice(0, -1)
          : // Otherwise, return the string as is
            fileContents;
      }
    });
  };

  // Get all files
  getFiles(startFolder);

  // Return the files object
  return files;
}

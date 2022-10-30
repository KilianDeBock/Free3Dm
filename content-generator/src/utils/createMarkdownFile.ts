import fs from 'fs';

export interface ContentObject {
  [key: string]: string;
}

export interface MarkdownObject {
  default: ContentObject;
  strings: string[];
}

export function createMarkdownFile(
  contents: ContentObject,
  name: string,
): MarkdownObject {
  // get the keys of the object
  const normalExports = Object.entries(contents)
    // Build the export strings
    .map(
      ([key, value]) =>
        `export const ${key} = ${JSON.stringify(value, null, 2)};`,
    );

  const defaultExport = `export default {\n  ${Object.keys(contents).join(
    ', \n  ',
  )}\n};`;

  fs.writeFileSync(
    `./content/${name}.ts`,
    `${normalExports.join('\n')}\n\n${defaultExport}`,
  );

  const stringContents = [defaultExport, ...normalExports];

  return { default: contents, strings: stringContents };
}

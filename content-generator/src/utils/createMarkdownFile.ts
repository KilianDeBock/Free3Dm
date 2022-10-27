import fs from 'fs';

export function createMarkdownFile(contents: any, name: string): void {
  const _normalExports = [];
  Object.keys(contents).forEach((key) => {
    _normalExports.push(
      `export const ${key} = ${JSON.stringify(contents[key], null, 2)};`,
    );
  });
  const normalExports = _normalExports.join('\n');

  const allExports = `{\n  ${Object.keys(contents).join(', \n  ')}\n}`;
  const defaultExport = `export default ${allExports};`;

  fs.writeFileSync(
    `./content/${name}.ts`,
    `${normalExports}\n\n${defaultExport}`,
  );
}

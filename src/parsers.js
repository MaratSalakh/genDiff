import path from 'node:path';
import fs from 'node:fs';
import { load } from 'js-yaml';

// parsing into parser

const parsing = (filePath, strOfFile) => {
  const type = filePath.split('.')[1];
  if (type === ('yaml' || 'yml')) {
    return load(strOfFile);
  }

  return JSON.parse(strOfFile);
};

const parser = (filePath1, filePath2) => {
  const path1 = path.resolve(filePath1);
  const path2 = path.resolve(filePath2);

  const strOfFile1 = fs.readFileSync(path1);
  const strOfFile2 = fs.readFileSync(path2);

  const dataOfFile1 = parsing(filePath1, strOfFile1);
  const dataOfFile2 = parsing(filePath2, strOfFile2);

  return [dataOfFile1, dataOfFile2];
};

export default parser;

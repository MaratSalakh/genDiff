import path from 'node:path';
import fs from 'node:fs';

const jsonParser = (filepath1, filepath2) => {
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);

  const strOfFile1 = fs.readFileSync(path1);
  const strOfFile2 = fs.readFileSync(path2);

  const dataOfFile1 = JSON.parse(strOfFile1);
  const dataOfFile2 = JSON.parse(strOfFile2);

  return [dataOfFile1, dataOfFile2];
};

export default jsonParser;

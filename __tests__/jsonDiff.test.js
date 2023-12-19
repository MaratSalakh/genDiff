import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import diff from '../src/diff.js';
import differenceStr from '../__fixtures__/jsonFixture.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const file1Path = getFixturePath('file1.json');
const file2Path = getFixturePath('file2.json');

test('diff', () => {
  expect(diff(file1Path, file2Path)).toEqual(differenceStr);
});

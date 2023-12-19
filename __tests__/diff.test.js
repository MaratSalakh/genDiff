import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import diff from '../src/diff.js';
import differenceStr from '../__fixtures__/testFixture.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const json1Path = getFixturePath('file1.json');
const json2Path = getFixturePath('file2.json');
const yaml1Path = getFixturePath('file1.yaml');
const yaml2Path = getFixturePath('file2.yaml');

test('jsonDiff', () => {
  expect(diff(json1Path, json2Path)).toEqual(differenceStr);
});

test('yamlDiff', () => {
  expect(diff(yaml1Path, yaml2Path)).toEqual(differenceStr);
});

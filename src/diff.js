import jsonParser from './parsers';

const diff = (fileName1, fileName2) => {
  const [data1, data2] = jsonParser(fileName1, fileName2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const sortedKeys1 = keys1.toSorted();
  const sortedKeys2 = keys2.toSorted();

  const minusAndNeutral = sortedKeys1.reduce((acc, key) => {
    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      acc.push(`  - ${key}: ${data1[key]}`);
    }

    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        acc.push(`    ${key}: ${data1[key]}`);
      } else {
        acc.push(`  - ${key}: ${data1[key]}`);
      }
    }

    return acc;
  }, []);

  const plusAndNeutral = sortedKeys2.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      acc.push(`  + ${key}: ${data2[key]}`);
    }

    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] !== data2[key]) {
        acc.push(`  + ${key}: ${data2[key]}`);
      }
    }

    return acc;
  }, []);

  const allList = [...minusAndNeutral, ...plusAndNeutral];

  const formattedList = allList.join('\n');

  console.log(`{\n${formattedList}\n}`);
};

export default diff;

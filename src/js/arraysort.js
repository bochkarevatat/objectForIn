export default function orderByProps(obj, arr = []) {
  const result = [];
  const result2 = [];
  for (const key in obj) {
    if (!arr.includes(key)) {
      result2.push({
        key,
        value: obj[key],
      });
    }
  }
  arr.forEach((elem) => {
    result.push({
      key: elem,
      value: obj[elem],
    });
  });
  result2.sort((a, b) => (a.key > b.key ? 1 : -1));
  const resultArr = [...result, ...result2];
  return resultArr;
}

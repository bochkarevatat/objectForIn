export default function orderByProps(obj) {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push({
      key,
      value,
    });
  }
  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  const result2 = result.splice(3, 2);
  result2.sort(() => -1);
  return result2.concat(result.slice(0, 3));
}

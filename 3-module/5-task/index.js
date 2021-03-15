function getMinMax(str) {
  let result = {};
  const numbers = str.split(/,| /).filter(value => {
    if(!isNaN(Number(value))) 
      return Number(value);
  }); 
  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  return result;
}

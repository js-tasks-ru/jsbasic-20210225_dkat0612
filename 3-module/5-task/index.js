function getMinMax(str) {
  const numbers = str.split(/,| /).filter(value => {
    if(!isNaN(Number(value))) 
      return Number(value);
  }); 
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

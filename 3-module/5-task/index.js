function getMinMax(str) {
  const numbers = str.split(/,| /).filter(value => {
    return !isNaN(Number(value)); 
  }); 
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    const val = salaries[key];
    if(typeof val === 'number' && isFinite(val)){
      sum += val;
    }
  }
  return sum;
}

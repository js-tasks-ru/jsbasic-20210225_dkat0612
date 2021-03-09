function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    const val = salaries[key];
    if(typeof val === 'number' && !isNaN(val) && 
              val != -Infinity && val != Infinity){
      sum += val;
    }
  }
  return sum;
}

function isEmpty(obj) {
  let propertyCounter = 0;
  for (key in obj) {
    ++propertyCounter;
  }
  return !propertyCounter;
}

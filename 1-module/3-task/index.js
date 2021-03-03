function ucFirst(str) {
  if(str == null)
    return "";
  let firstUCLetter = str.slice(0, 1).toUpperCase();
  if(str.length == 1) 
    return firstUCLetter;
  return firstUCLetter + str.slice(1);
}

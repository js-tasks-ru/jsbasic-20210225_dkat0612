const SPAM_STRING_1 = "1xbet";
const SPAM_STRING_2 = "xxx";
function checkSpam(str) {
  return str.toLowerCase().includes(SPAM_STRING_1) 
      || str.toLowerCase().includes(SPAM_STRING_2);
}

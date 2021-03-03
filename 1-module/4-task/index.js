function checkSpam(str) {
  const SPAM_STRING_1 = "1xbet";
  const SPAM_STRING_2 = "xxx";
  if(str != null && (str.toLowerCase().includes(SPAM_STRING_1) 
                  || str.toLowerCase().includes(SPAM_STRING_2)) )
    return true;
  return false;
}

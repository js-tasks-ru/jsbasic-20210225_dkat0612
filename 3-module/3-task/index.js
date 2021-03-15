function camelize(str) {
  const newStr = str.split('-')
                      .map((word, index) => {
                        if(index > 0 ){
                          return word[0].toUpperCase() + word.slice(1);
                        }
                        return word;
                      })
                      .join('');
  return newStr;
}

function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const textDiv = document.querySelector('#text');

  toggleButton.addEventListener('click', () => {
    if(textDiv.hidden){
      textDiv.hidden = false;
    } else{
      textDiv.hidden = true;
    }
  });
}

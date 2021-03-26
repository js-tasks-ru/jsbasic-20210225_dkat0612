function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const textDiv = document.querySelector('#text');

  toggleButton.addEventListener('click', () => {
    textDiv.hidden = !textDiv.hidden;
  });
}

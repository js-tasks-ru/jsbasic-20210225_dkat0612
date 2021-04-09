import createElement from '../../assets/lib/create-element.js';

function modalTemplate() {
  return `
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title"></h3>
      </div>

      <div class="modal__body"></div>
    </div>
  </div>`
}

export default class Modal {
  constructor() {
    this._elem = createElement(modalTemplate());
    this._elem.querySelector('.modal__close').addEventListener('click', () => {
        this._removeModal();
    });
    document.addEventListener('keydown', (event) => {
      if(event.code === 'Escape'){
        this._removeModal();
      }
    });
  }

  get elem() {
    return this._elem;
  }

  open(){
    document.body.insertAdjacentElement('afterbegin', this._elem);
    document.body.classList.add('is-modal-open');
  }

  setTitle(title){
    this._elem.querySelector('.modal__title').innerText = title;
  }

  setBody(node){
    let modalBody = this._elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.insertAdjacentElement('afterbegin', node);
  }

  close(){
    this._removeModal();
  }

  _removeModal(){
    document.body.classList.remove('is-modal-open');
    this._elem.remove();
  }
}

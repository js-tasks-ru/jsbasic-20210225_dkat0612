/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
function tableRowTemplate(person) {
  let row = '<tr data-name="row">';
  for (const key in person) {
    row += `<td>${person[key]}</td>`;
  }
  return row + `<td>${removeButtonTemplate()}</td></tr>`;
}

function tbodyTemplate(rows) {
  return `
  <tbody>
    ${rows.map(person => tableRowTemplate(person)).join('\n')}
  </tbody>`;
}

function removeButtonTemplate() {
  return '<button data-action="remove">X</button>';
}

export default class UserTable {
  constructor(rows) {
    this._elem = document.createElement('Table');
    this._elem.insertAdjacentHTML("afterbegin", tbodyTemplate(rows));
    this._elem.addEventListener('click', (event) => {
      const target = event.target;
      if (target.dataset.action !== 'remove') {
        return;
      }
      const row = target.closest(`[data-name="row"]`);
      if (!row) {
        return;
      }
      
      row.remove();
    })
  }
  get elem() {
    return this._elem;
  }
}

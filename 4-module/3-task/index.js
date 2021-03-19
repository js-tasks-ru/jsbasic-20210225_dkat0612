function highlight(table) {
  let index  = {};
  const tHeadRow = table.tHead.rows[0].cells;
  index.status = getTableCellsIndexes(tHeadRow, 'Status');
  index.gender = getTableCellsIndexes(tHeadRow, 'Gender');
  index.age = getTableCellsIndexes(tHeadRow, 'Age');
  for(let i = 1; i < table.rows.length; ++i){
    let row = table.rows[i];
    const available = row.cells[index.status].dataset.available;
    if (!available){
      row.hidden = true;
    } else{
        row.classList.add((available === 'true' ? 'available' : 'unavailable'));
    }
    row.classList.add((row.cells[index.gender].textContent === 'f' ? 'female' : 'male'));
    if(row.cells[index.age].textContent < 18){
      row.style.textDecoration = 'line-through';
    }
  }
}

function getTableCellsIndexes(tHeadRow, rowName){
  for(let i = 0; i < tHeadRow.length; ++i){
    if(tHeadRow[i].textContent === rowName){
      return i;
    }
  }
}


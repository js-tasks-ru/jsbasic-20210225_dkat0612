function highlight(table) {
  let index  = {
    status : 0,
    gender : 0,
    age : 0
  };
  const tHeadRow = table.tHead.rows[0].cells;
  for(let i = 0; i < tHeadRow.length; ++i){
    if(tHeadRow[i].innerHTML === 'Status'){
      index.status = i;
    }
    if(tHeadRow[i].innerHTML === 'Gender'){
      index.gender = i;
    }
    if(tHeadRow[i].innerHTML === 'Age'){
      index.age = i;
    }
  }
  for(let i = 1; i < table.rows.length; ++i){
    let row = table.rows[i];
    const available = row.cells[index.status].dataset.available;
    if(available === undefined){
      row.setAttribute('hidden', 'true');
    } else{
        row.classList.add((available === 'true' ? 'available' : 'unavailable'));
    }
    row.classList.add((row.cells[index.gender].innerHTML === 'f' ? 'female' : 'male'));
    if(row.cells[index.age].innerHTML < 18){
      row.setAttribute('style', 'text-decoration: line-through');
    }
  }
}

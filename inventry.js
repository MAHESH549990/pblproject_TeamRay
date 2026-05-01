function deleteRow(btn) {
  let row = btn.parentElement.parentElement;
  row.remove();
}

function editRow(btn) {
  let row = btn.parentElement.parentElement;
  let cells = row.children;

  let name = prompt("Edit Farm Name", cells[0].innerText);
  if (name) cells[0].innerText = name;
}
let result = document.getElementById('result');
let againBtn = document.getElementById('again');

function promptNumber() {
  let input = prompt('Enter a positive integer:');
  if (input === null) {
    return null;
  }
  let n = parseInt(input, 10);
  if (isNaN(n) || n <= 0) {
    return NaN;
  }
  return n;
}

function clearResult() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function renderTable(n) {
  let table = document.createElement('table');

  let caption = document.createElement('caption');
  caption.appendChild(document.createTextNode('Multiplication Table (1..' + n + ')'));
  table.appendChild(caption);

  let i, j;
  for (i = 1; i <= n; i++) {
    let tr = document.createElement('tr');
    for (j = 1; j <= n; j++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(String(i * j)));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  clearResult();
  result.appendChild(table);
}

function showError(msg) {
  clearResult();
  let p = document.createElement('p');
  p.className = 'error';
  p.appendChild(document.createTextNode(msg));
  result.appendChild(p);
}

function runOnce() {
  let n = promptNumber();
  if (n === null) {
    showError('Cancelled.');
    return;
  }
  if (isNaN(n)) {
    showError('Please enter a positive integer (e.g. 5).');
    return;
  }
  renderTable(n);
}

againBtn.onclick = runOnce;

runOnce();

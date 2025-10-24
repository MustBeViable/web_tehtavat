const out = document.getElementById('out');
function askInt(message) {
  const raw = prompt(message);
  if (raw === null) return null;
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? NaN : n;
}
function render(movies) {
  out.innerHTML = '';
  const table = document.createElement('table');
  const cap = document.createElement('caption');
  cap.textContent = 'Movies (sorted by rating desc)';
  table.appendChild(cap);
  const thead = document.createElement('thead');
  const htr = document.createElement('tr');
  ['#', 'Title', 'Rating'].forEach(txt => {
    const th = document.createElement('th');
    th.textContent = txt;
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  for (let i = 0; i < movies.length; i++) {
    const tr = document.createElement('tr');
    const idx = document.createElement('td');
    idx.textContent = String(i + 1);
    const t  = document.createElement('td');
    t.textContent = movies[i].title;
    const r  = document.createElement('td');
    r.textContent = String(movies[i].rating);
    tr.appendChild(idx);
    tr.appendChild(t);
    tr.appendChild(r);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  out.appendChild(table);
  if (movies.length > 0) {
    const best = movies[0];
    const p = document.createElement('p');
    p.innerHTML = `Highest-rated: <strong>${best.title}</strong> (${best.rating}/5)`;
    out.appendChild(p);
  }
}
const count = askInt('How many movies do you want to rate?');
if (count === null) {
  out.innerHTML = '<p class="error">Cancelled.</p>';
} else if (Number.isNaN(count) || count <= 0) {
  out.innerHTML = '<p class="error">Please enter a positive integer.</p>';
} else {
  const movies = [];
  for (let i = 1; i <= count; i++) {
    let title = prompt(`Movie ${i} title:`);
    if (title === null) { title = `(untitled ${i})`; }
    title = title.trim() || `(untitled ${i})`;
    let rating = askInt(`Rating for "${title}" (1–5):`);
    if (rating === null || Number.isNaN(rating)) rating = 0;
    if (rating < 1 || rating > 5) rating = 0;
    movies.push({ title, rating });
  }
  movies.sort((a, b) => b.rating - a.rating);
  render(movies);
}

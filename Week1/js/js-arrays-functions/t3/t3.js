const out = document.getElementById('out');
const inputs = [];
while (true) {
  const ans = prompt("Enter a number (or 'done' to finish):");
  if (ans === null) break;
  if (ans.trim().toLowerCase() === 'done') break;
  const num = Number(ans);
  if (!Number.isNaN(num)) {
    inputs.push(num);
  }
}
const evens = [];
for (const n of inputs) {
  if (n % 2 === 0) {
    evens.push(n);
  }
}
if (evens.length > 0) {
  out.textContent = `Even Numbers: ${evens.join(', ')}`;
} else {
  out.textContent = `Even Numbers: None`;
}

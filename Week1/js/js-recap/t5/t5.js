const form = document.getElementById('sum-form');
const numInput = document.getElementById('number');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const n = parseInt(numInput.value, 10);

  if (Number.isNaN(n) || n <= 0) {
    result.innerHTML = `<p class="error">Please enter a positive integer.</p>`;
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  result.innerHTML = `
    <p>Natural numbers from 1 to ${n}</p>
    <p>Sum: <strong>${sum}</strong></p>
  `;
});

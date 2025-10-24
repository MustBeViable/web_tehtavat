const form = document.getElementById('grade-form');
const scoreInput = document.getElementById('score');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const s = parseInt(scoreInput.value, 10);

  if (Number.isNaN(s) || !(s >= 0 && s <= 100)) {
    result.innerHTML = `<p class="error">Please enter an integer between 0 and 100.</p>`;
    return;
  }

  let grade;
  if (s >= 88 && s <= 100) {
    grade = 5;
  } else if (s >= 76 && s <= 87) {
    grade = 4;
  } else if (s >= 64 && s <= 75) {
    grade = 3;
  } else if (s >= 52 && s <= 63) {
    grade = 2;
  } else if (s >= 40 && s <= 51) {
    grade = 1;
  } else {
    grade = 0;
  }

  result.innerHTML = `
    <p>Score: <strong>${s}</strong></p>
    <p>Grade: <strong>${grade}</strong></p>
  `;
});

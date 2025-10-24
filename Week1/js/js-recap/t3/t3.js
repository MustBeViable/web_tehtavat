const form = document.getElementById('triangle-form');
const aInput = document.getElementById('sideA');
const bInput = document.getElementById('sideB');
const cInput = document.getElementById('sideC');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);
  const c = parseFloat(cInput.value);

  if ( [a, b, c].some(Number.isNaN) || !(a > 0 && b > 0 && c > 0) ) {
    result.textContent = 'Please enter three positive numbers.';
    return;
  }

  const validTriangle = (a + b > c) && (a + c > b) && (b + c > a);
  if (!validTriangle) {
    result.textContent = 'Not a valid triangle (violates triangle inequality).';
    return;
  }

  const allEqual = (a === b) && (b === c);
  const anyTwoEqual = (a === b) || (a === c) || (b === c);

  let type;
  if (allEqual) {
    type = 'Equilateral (all sides equal)';
  } else if (anyTwoEqual && !allEqual) {
    type = 'Isosceles (two sides equal)';
  } else {
    type = 'Scalene (no sides equal)';
  }

  result.innerHTML = `
    <p>a = <strong>${a}</strong>, b = <strong>${b}</strong>, c = <strong>${c}</strong></p>
    <p>Triangle type: <strong>${type}</strong></p>
  `;
});

const form = document.getElementById("points-calculator");
const input = document.getElementById("points");
const out = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const points = input.value.trim();
  const [point1, point2] = points.split(";");
  const [x1Str, y1Str] = point1.replace(/[()]/g, "").split(",");
  const [x2Str, y2Str] = point2.replace(/[()]/g, "").split(",");

  const x1 = parseFloat(x1Str);
  const y1 = parseFloat(y1Str);
  const x2 = parseFloat(x2Str);
  const y2 = parseFloat(y2Str);

  if ([x1, y1, x2, y2].some(isNaN)) {
    out.textContent = "Wrong input! use form (x,y);(x2,y2)";
    return;
  }

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.hypot(dx, dy);

  out.innerHTML = `
    <p>P1 = (${x1}, ${y1}), P2 = (${x2}, ${y2})</p>
    <p>Distance: <strong>${distance.toFixed(4)}</strong></p>
  `;
});

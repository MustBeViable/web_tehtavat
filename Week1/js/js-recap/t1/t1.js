const form = document.getElementById("converter");
const cInput = document.getElementById("celsius");
const out = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const c = parseFloat(cInput.value);
  if (Number.isNaN(c)) {
    out.textContent = "Please enter a valid number.";
    return;
  }
  const f = (c * 9) / 5 + 32;
  const k = c + 273.15;

  out.innerHTML = `
        <p>${c} °C = <strong>${f.toFixed(2)} °F</strong></p>
        <p>${c} °C = <strong>${k.toFixed(2)} K</strong></p>
      `;
});

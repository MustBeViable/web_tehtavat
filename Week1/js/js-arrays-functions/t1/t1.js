const out = document.getElementById('out');
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits:", fruits);
out.textContent  = `Fruits: ${JSON.stringify(fruits)}\n`;
console.log("Length of Fruits:", fruits.length);
out.textContent += `Length of Fruits: ${fruits.length}\n`;
console.log('Element at Index 2:', fruits[2]);
out.textContent += `Element at Index 2: ${JSON.stringify(fruits[2])}\n`;
const lastFruit = fruits[fruits.length - 1];
console.log('Last Element of Fruits:', lastFruit);
out.textContent += `Last Element of Fruits: ${JSON.stringify(lastFruit)}\n`;
const vegetables = [];
for (let i = 1; i <= 3; i++) {
  const v = prompt(`Enter vegetable ${i}:`);
  if (v !== null && v.trim() !== "") {
    vegetables.push(v.trim());
  } else {
    vegetables.push("(empty)");
  }
}
console.log('Vegetables:', vegetables);
out.textContent += `Vegetables: ${JSON.stringify(vegetables)}\n`;
console.log('Length of Vegetables:', vegetables.length);
out.textContent += `Length of Vegetables: ${vegetables.length}\n`;

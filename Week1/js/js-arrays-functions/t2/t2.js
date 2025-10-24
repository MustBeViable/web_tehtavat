const out = document.getElementById('out');
const numbers = [];
for (let i = 1; i <= 5; i++) {
  const raw = prompt(`Enter Number ${i}:`);
  const n = Number(raw);
  numbers.push(n);
}
console.log('Numbers:', numbers);
out.textContent  = `Numbers: [${numbers.join(', ')}]\n`;
const searchRaw = prompt('Enter a Number to Search:');
const searchNum = Number(searchRaw);
const found = numbers.includes(searchNum);
const msg = found ? `Number ${searchNum} is found in the array.` : `Number ${searchNum} is not found in the array.`;
console.log(msg);
out.textContent += msg + "\n";
const removed = numbers.pop();
console.log('Removed:', removed);
console.log('Updated Numbers:', numbers);
out.textContent += `Updated Numbers: [${numbers.join(', ')}]\n`;
const sorted = [...numbers].sort((a, b) => a - b);
console.log('Sorted Numbers:', sorted);
out.textContent += `Sorted Numbers: [${sorted.join(', ')}]\n`;

function sortArray(numbers) {
  //luo shallow kopion listasta ja muokkaa sitä
  return [...numbers].sort((a, b) => a - b);
}
const original = [5, 2, 8, 1, 9];
const sorted = sortArray(original);
console.log('Original:', original);
console.log('Sorted (asc):', sorted);

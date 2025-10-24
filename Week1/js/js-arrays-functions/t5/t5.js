function sortArray(numbers, order) {
  const copy = [...numbers];
  if (order === 'desc') {
    return copy.sort((a, b) => b - a);
  }
  return copy.sort((a, b) => a - b);
}
const nums = [5, 2, 8, 1, 9];
console.log(sortArray(nums, 'asc'));
console.log(sortArray(nums, 'desc'));
console.log('Original stays intact:', nums);

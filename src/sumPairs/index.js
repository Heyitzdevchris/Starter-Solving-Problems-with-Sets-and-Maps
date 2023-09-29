/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  // Initialize a new Map named 'numbers'
  const numbers = new Map();

  // Initialize an empty array to store the result pairs
  const result = [];

  // Iterate over each element 'e' in array 'A'
  for (const e of A) {
    // Calculate the difference 'diff' between N and 'e'
    const diff = N - e;

    // Look up 'diff' in 'numbers'
    if (numbers.has(diff)) {
      // Add [e, diff] to 'result'
      result.push([e, diff]);
    }

    // Add 'e' to 'numbers' to check for future pairs
    numbers.set(e, true);
  }

  return result;
}

module.exports = sumPairs;

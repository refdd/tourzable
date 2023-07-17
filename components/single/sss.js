function calculateProductOperations(operations) {
  const result = [];
  let set = [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < operations.length; i++) {
    const [command, value] = operations[i].split(" ");

    if (command === "push") {
      set.push(parseInt(value));
      min = Math.min(min, parseInt(value));
      max = Math.max(max, parseInt(value));
    } else if (command === "pop") {
      const index = set.indexOf(parseInt(value));

      if (index !== -1) {
        set.splice(index, 1);
      }

      min = Math.min(...set);
      max = Math.max(...set);
    }

    result.push(min * max);
  }

  return result;
}

// Example usage
const operations = ["push 1", "push 2", "push 3", "pop 1"];
const result = calculateProductOperations(operations);
console.log(result); // Output: [1, 2, 3, 6]

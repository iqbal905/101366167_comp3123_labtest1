function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject("Input is not an array");
    } else {
      const filtered = mixedArray
        .filter(item => typeof item === "string")
        .map(str => str.toLowerCase());

      resolve(filtered);
    }
  });
}

// Example usage  of lowerCaseWords:
const mixedArray = ['PIZZA', 10, true, 'Pasta', 'JS', 100];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(err => console.error(err));

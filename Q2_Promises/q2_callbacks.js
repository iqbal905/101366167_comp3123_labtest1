function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 500ms");
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Rejected after 500ms");
    }, 500);
  });
}

// Example usage:
resolvedPromise()
  .then(msg => console.log("Success:", msg))
  .catch(err => console.error("Error:", err));

rejectedPromise()
  .then(msg => console.log("Success:", msg))
  .catch(err => console.error("Error:", err));

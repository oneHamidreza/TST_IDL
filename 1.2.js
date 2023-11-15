// Create a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = "This is a logged message!";
    console.log(message);
    resolve(message);
  }, 1000);
});

p
  .then((result) => {
    console.log("Promise resolved with message:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });

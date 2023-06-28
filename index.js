//  Promises
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Value 1');
    reject(new Error('Failed'));
  }, 10000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Value 2');
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Value 3');
    reject(new Error('Failed'));
  }, 5000);
});

// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });

// Promise API Methods

// 01. Promise.all(iterable)
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error.message));

//----------------------------------------------------------

// 02. Promise.allSettled(iterable)
// Returns a new Promise that resolves after all promises in the iterable have settled (either resolved or rejected). The returned Promise resolves to an array of objects representing the fulfillment status of each promise.

// Promise.allSettled([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

//----------------------------------------------------------

// 03. Promise.race(iterable)
// Waits for the first promise to settle and its result/error becomes the outcome

// Promise.race([p1, p2, p3]).then((value) => console.log(value));

//----------------------------------------------------------

// 04. Promise.any(iterable)
// Returns a new Promise that resolves as soon as one of the promises in the iterable resolves. If all promises reject, the returned Promise is rejected with an AggregateError containing all the rejection reasons.
// Promise.any([p1, p2, p3]).then((value) => console.log(value));

//----------------------------------------------------------

// 05. Promise.resolve(value)
// Makes a resolved promise with the given value

let resolve = Promise.resolve('Hello (Resolved)');
// resolve.then((value) => console.log(value));

//----------------------------------------------------------

// 06. Promise.reject(error)
// Makes a rejected promise with the given error

Promise.reject(new Error('Fail'))
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

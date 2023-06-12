/**
  * Async/Away: New way for work with Promises.
  * Before, we had just objects type 'Promise', and had to work with '.then()'
  * Now, we write two functions:
    First fn, returns a promise, and will be executed asynchronously
    Second fn, using 'async' and 'await' words, calls first function
      and replaces '.then()' logic
  * 'async' is used before of 'function' word (in second function definition)
  * 'await', is used for indicate what instruction (first function) should be
    executed before of continue executing next instructions inner second function
  */

const functionPromise = function() {
  console.log('3.', 'Inner functionPromise, it is called, now we wait it resolve');
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('this was executed asynchonously in a promise!!'), 0)
      : reject(new Error('Error!'));
  });
}

const functionAsync = async function() {
  console.log('2.', 'Inner functionAsync, it is called');
  // Before of 'await', all instructions are synchronously executed
  const something = await functionPromise();
  // After of 'await', all instructions are asynchronously executed
  // Later instructions work as '.then()' blocks
  console.log('4.', 'Inner functionAsync, ' + something);
  console.log('5.', 'Inner functionAsync, then, async process was resolved');
  console.log('6.', 'Inner functionAsync, then, we will work with the response');
}

console.log('1.', 'Outer functionAsync, before of call functionAsync');
functionAsync();
console.log('7.', 'Outer functionAsync, after of call functionAsync');
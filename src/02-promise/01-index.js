/**
 * Promise: An object that will produce a value sometime in the future.
 *  A promise has three possible states:
 *    pending: initial state, neither fulfilled nor rejected
 *    fulfilled: meaning that the operation was completed successfully
 *    rejected: meaning that the operation failed
 */

// BASIC STRUCTURE
const promise = new Promise(function(resolve, reject) {
  if(true) {
    resolve('hey!');
  } else {
    reject('ouu');
  }
});

// Example 1, how use promise structure
const cows = 9;
const canCoverMilkDemand = new Promise(function(resolve, reject) {
  const neededCows = 10;
  if(cows >= neededCows) {
    resolve(`We have ${cows-neededCows} more cows than necessary`);
  } else {
    reject(`We just have ${cows} cows, less than necessary`);
  }
});

// Methods for access data from promises
// 'then()' used to access the result data when promise state is 'fulfilled'
canCoverMilkDemand.then(result => {
  console.log(result);
  return result; // result is returned for the next '.then()'
// 'then()' can be used many times
}).then(resultAgain => {  
  console.log(`Really. ${resultAgain}`);
// 'chatch()' used to access the error data when promise state is 'rejected'
}).catch(error => {
  console.log(error);
// 'finally()' executed when promise has finished, in both cases, 'fulfilled' or 'rejected'
}).finally((() => {
  console.log('Finally');
}));
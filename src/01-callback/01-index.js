/**
 * Callback: Function sent as an argument to another function
 */

// EXAMPLE 1
// Callback1 function
function sum(num1, num2) {
  return num1 + num2;
}
// Callback2 function
function rest(num1, num2) {
  return num1 - num2;
}
// Main function
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
// Example implementation
console.log(calc(3,2,sum));
console.log(calc(3,2,rest));

//------------------------------------------------------

// EXAMPLE 2
setTimeout(function callback() {
  console.log('Y esto también es un Callback');
}, 4000);

//------------------------------------------------------

// EXAMPLE 3
// Callback function
function grettin(name) {
  console.log(`Hola ${name}, esto es un Callback`)
}

// Main function
setTimeout(grettin, 2000, 'Carlos');
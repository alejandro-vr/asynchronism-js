/**
 * Using callbacks in old xmlhttp for request json objects
 */

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// Main function, request product information as an object
function fetchData(urlApi, callback) {
  // Instantiate an object from XMLHttpRequest prototype
  let xhttp = new XMLHttpRequest();
  // 'open()' method init comunication, can be 'GET' or 'POST',
  // second param is the the API's url, if is asynchrono (true o false),
  // user and pass. In this case user and pass isn't used
  xhttp.open('GET', urlApi, true);
  // 'onreadystatechange' is our function that will be executed
  // when our XMLHttpRequest insance state change
  xhttp.onreadystatechange = function(event) {
    // 'readyState' attrib say the state of XMLHttpRequest instance
    //  0 Not initialized
    //  1 Loading
    //  2 Executed
    //  3 Interacting
    //  4 Finished
    if(xhttp.readyState === 4) {
      // 'status' attrib say how the API has resolved our request (200 Ok)
      if(xhttp.status === 200) {
        // callback is executed with an posible error and an object as args,
        // Because API result is in plain text, method JSON.parse is used for get an object
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Error object is initialized with API's url as arg
        const error = new Error(urlApi);
        return callback(error, null);
      }
    }
  }
  // As its name say, the 'send()' method sends request to the server
  xhttp.send();
}

// Example implementation
// Three nested 'fechData' isn't necessary, but, is used for show how 'callbacks' work
// The first callback requests all API's products
fetchData(`${API}/products`, function callback1(error1, data1) {
  if(error1) return console.error('Error1', error1);
  // The second callback requests a specific product by its 'id'
  fetchData(`${API}/products/${data1[0].id}`, function callback2(error2, data2) {
    if(error2) return console.error('Error2', error2);
    // The third callback requests a specific cathegoty of a product by its 'id'
    fetchData(`${API}/categories/${data2?.category?.id}`, function callback3(error3, data3) {
      if(error3) return console.error('Error3', error3);
      // Show products[0]
      console.log('data1[0]', data1[0]);
      // Show product.title
      console.log('data2.title', data2.title);
      // Show cathegory.name
      console.log('data3.name', data3.name);
    });
  });
});
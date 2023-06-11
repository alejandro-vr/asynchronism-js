/**
 * Using 'fetch' for POST a json object
 */

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Main function, POST product
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  'title': 'Other new product',
  'price': 8888,
  'description': 'New product from fetch post',
  'categoryId': 1,
  'images': [
    'https://placeimg.com/640/480/any'
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(res => console.log('res:', res))
  .catch(error => console.log('error:', error));

//------------------------------------------------------------
// EXERCISES

// Function for PUT
function putData(urlApi, id, data) {
  const response = fetch(`${urlApi}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

data.price = 1234;
data.description = 'Now this prod has been updated';

putData(`${API}/products`, 460, data)
  .then(response => response.json())
  .then(res => console.log('res:', res))
  .catch(error => console.log('error:', error));

// Function for DELETE
function deleteData(urlApi, id) {
  const response = fetch(`${urlApi}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response;
}

deleteData(`${API}/products`, 461)
  .then(response => response.json())
  .then(res => console.log('res:', res))
  .catch(error => console.log('error:', error));
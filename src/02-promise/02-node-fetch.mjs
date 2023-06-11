/**
 * Using 'fetch' (fetch is a promise) for request json objects
 */

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Main function, request product information as an object
function fetchData(urlApi) {
  // Node-fetch function execution (it's very much easy than XMLHttp methods)
  return fetch(urlApi);
}

/* Example implementation
 * Many nested 'fetch' can be used, isn't necessary, but, in this case
 * is used for show how 'fetch' work. 'fetch' correct or prevent 'hell callback'
 * Hell callback: Very much complexity with more than three nested callbacks
 */
// The first 'fetch' requests all API's products
fetchData(`${API}/products`)
  // Then parse all products to json
  .then(response => response.json())
  // Then second 'fetch' requests one specific product by its id
  .then(products => {
    console.log('products', products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  // Then parse that specific product to json
  .then(response => response.json())
  // Then third 'fetch' requests a specific categoty of the product by its 'id'
  .then(product => {
    console.log('product', product);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  // Then parse that specific category to json
  .then(response => response.json())
  // Then show that specific category by console
  .then(category => {
    console.log('category', category);
  })
  // If an error happen, show that error by console
  .catch(error => console.log(error))
  // Finally, after finish all 'then()' and the 'catch()', is executed a last code
  .finally(() => {
    console.log('Finally'); 
  })

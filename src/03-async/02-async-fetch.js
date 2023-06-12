/**
 * 'fetch' (using async) for request json objects
 */

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Main function, request (with await) product information as an object
async function fetchData(urlApi) {
  // First make 'fetch' request
  const response = await fetch(urlApi);
  // Then parse response to json
  const data = await response.json();
  return data;
}

/* Example implementation
 * In comparison with 'Promises' is more clean,
 * don't uses many 'then()' blocks
 */
const asyncFunction = async (urlApi) => {
  try {
    // The first 'fetch' requests all API's products
    const products = await fetchData(`${urlApi}/products`);
    // Then second 'fetch' requests one specific product by its id
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    // Then third 'fetch' requests a specific categoty of the product by its 'id'
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
    // Then fourth show console.logs
    console.log('products:', products);
    console.log('product:', product);
    console.log('category:', category);
  } catch(error) {
    console.log(error);
  }
}

asyncFunction(API);
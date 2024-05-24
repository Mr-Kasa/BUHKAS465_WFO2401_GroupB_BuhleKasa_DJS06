// import {products} from "./secondScript.js"
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// Question 2
 

 /**
 * Logging each product name
 */
const productNames = () => products.map(product => {
    return product.product;
});

 /**
  * logging products with names longer than 5 characters
  */
 const filteredNames = ()=>{
 const productsNameLongerThan5 = products.filter(product => product.product.length > 5)
  return productsNameLongerThan5.map(product => product.product);
 }


/**
 * logging product prices with no price
 */
const productsWithNoPrice = ()=>{
    const filteredProducts = products.filter(price=> price.price==false)
    return filteredProducts.map(product => product.product )
}

/**
 * Concects all product names into a single string
 */




console.log(
        productNames(),
        "\n",
        filteredNames(),
        '\n',
        productsWithNoPrice()

)
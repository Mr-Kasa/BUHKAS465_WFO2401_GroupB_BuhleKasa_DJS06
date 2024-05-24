// import {products} from "./secondScript.js"
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

/**
 * Question 2
 * 
 */
 /**
     * logging each product name
     */
 const productNames = products.map(products => {
    return products.product
 })


 /**
  * logging products with names longer than 5 characters
  */
 const productsNameLongerThan5 = products.filter(product => product.product.length >= 5)
const filteredNames = productsNameLongerThan5.map(product => product.product);



console.log(
        productNames,
        "\n",
        filteredNames,

)
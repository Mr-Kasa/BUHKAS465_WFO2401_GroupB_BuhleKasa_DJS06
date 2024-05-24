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
 * Concatenates all product names into a single string
 */
const joinedString = () => {
    // Initialize an empty string to accumulate the product names
    return products.reduce((accumulator, currentProduct) => {
        // Concatenate the current product name to the accumulator string
        return accumulator + currentProduct.product;
    }, '');
}

/**
 * Returns highest and lowest value in an object
 */
const lowestAndHighestPrices = () => {
    const highestPrice = Object.entries(products)
        .sort(([, a], [, b]) => {
            const priceA = Number(a.price) || 0;
            const priceB = Number(b.price) || 0;
            return priceB - priceA; // Sort in descending order based on prices
        })[0][1].product;

    const lowestPrice = Object.entries(products)
        .sort(([, a], [, b]) => {
            const priceA = Number(a.price) || Infinity; // Use Infinity as default for sorting
            const priceB = Number(b.price) || Infinity; // Use Infinity as default for sorting
            return priceA - priceB; // Sort in ascending order based on prices
        })[0][1].product;

    return `Highest Priced Item: ${highestPrice}    Lowest Priced Item: ${lowestPrice}`;
}






console.log(
        productNames(),
        "\n",
        filteredNames(),
        '\n',
        productsWithNoPrice(),
        "\n",
        joinedString(),
        '\n',
        lowestAndHighestPrices(),
        "\n",




)
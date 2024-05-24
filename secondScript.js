// A list of products with prices:

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
// Question 2
 
console.log(

    "\n",
    (()=>{return `Product Names:`})(),
    "\n",
    /**
     * Logging each product name
     */
    (() => {
        const productNames = products.map(product => product.product);
        return productNames;
    })(),
    "\n",


    "\n",
    (()=>{return `Names longer than 5 characters`})(),
    "\n",
    /**
     * logging products with names longer than 5 characters
     */
    (() => {
        const productsNameLongerThan5 = products.filter(product => product.product.length > 5);
        return productsNameLongerThan5.map(product => product.product);
    })(),
    '\n',


    "\n",
    (()=>{return `Product with no price`})(),
    "\n",
    /**
     * logging product prices with no price
     */
    (() => {
        const filteredProducts = products.filter(price => !price.price);
        return filteredProducts.map(product => product.product);
    })(),
    "\n",


    "\n",
    (()=>{return `All product names into a single string`})(),
    "\n",
    /**
     * Concatenates all product names into a single string
     */
    (() => {
        return products.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.product;
        }, '');
    })(),
    '\n',


    "\n",
    (()=>{return `Highest and lowest prices`})(),
    "\n",
    /**
     * Returns highest and lowest value in an object
     */
    (() => {
        const highestPrice = Object.entries(products)
            .sort(([, a], [, b]) => {
                const priceA = Number(a.price) || 0;
                const priceB = Number(b.price) || 0;
                return priceB - priceA;
            })[0][1].product;

        const lowestPrice = Object.entries(products)
            .sort(([, a], [, b]) => {
                const priceA = Number(a.price) || Infinity;
                const priceB = Number(b.price) || Infinity;
                return priceA - priceB;
            })[0][1].product;

        return `Highest Priced Item: ${highestPrice}    Lowest Priced Item: ${lowestPrice}`;
    })(),
    "\n",

    "\n",
    (()=>{return `'Object' with cost and 'names' as keys`})(),
    "\n",
    /**
     * recreate the products object with keys 'name' and 'cost'
     */
    (() => {
        
        return Object.entries(products).reduce((result, [, product]) => {
            const { product: name, price: cost } = product;
            return [...result, { name, cost }];
        }, []);
    })()
);

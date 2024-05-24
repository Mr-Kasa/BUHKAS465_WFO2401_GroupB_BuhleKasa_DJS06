// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
// eslint-disable-next-line no-unused-vars
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/**
 * Question 1
 * 
 */


//List of names
console.log('Names:')

names.forEach((names)=>{
 console.log(names)
})
console.log('\n')

console.log('Provinces:')
provinces.forEach((province)=>{
  console.log(province)
 })


 //List of names with corresponding provinces
 function nameAndProvince(names, provinces) {
  names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
  });
}

console.log('\n')
console.log('Name and Province')
nameAndProvince(names, provinces)



console.log('\n')
console.log('Provinces in uppercase')

//Turn provinces into a string
function upperCase(word){
    const uncapitalized = word
     const capitalized = uncapitalized.toUpperCase()
     return capitalized
}
console.log(provinces.map(upperCase))




//Number of letters in each name
  
function stringLength(name){
  return name.length
}
console.log('\n')
console.log("An array containing the number of letters in each name respectively")
console.log(names.map(stringLength))

//Sorting Provinces alphabetically
console.log('\n')
console.log('Provinces sorted Alphabetically:')
console.log(provinces.sort())



//Removing provinces with the word Cape From the List and
function capeProvinceRemoval() {
  const filteredArray = provinces.filter(province => !(province.includes('Cape')));
  console.log('\n');
  console.log('Number of provinces after provinces with "Cape" are removed:');
  console.log(filteredArray.length);
}

capeProvinceRemoval()
console.log('\n')
console.log('Check if names contain S, Returns true or false')
//create bollean value if province name contains 'S'
function contains_S(word){
    return word+"   "+(word.toUpperCase()).includes('S')
}
console.log(names.map(contains_S))



//Transform names array into an object
console.log('\n')
console.log('Object of names and provinces')
let nameAndProvinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameAndProvinceObject);


/**
 * Question 2
 * 
 */


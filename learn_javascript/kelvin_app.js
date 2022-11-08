// This value for kelvin will stay constant
const kelvin = 20;
// This next value represents the difference between kelvin and celsius
const celsius = kelvin - 273;
// converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// When you convert from Celsius to Fahrenheit, you often get a decimal number. So we are using the .floor() method from the built-in Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);


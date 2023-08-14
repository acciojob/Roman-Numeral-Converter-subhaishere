// function convertToRoman(num) {
//   	const obj = {
//       0:['M',1000], 
//       1:['D', 500], 
//       2:['C', 100], 
//       3:['L', 50], 
//       4:['X', 10], 
//       5:['V', 5], 
//       6:['I', 1]
//     };

//   //your code here
// let romanNumeral = '';

//   for (let key in obj) {
//     const symbol = obj[key][0];
//     const value = obj[key][1];

//     while (num >= value) {
//       romanNumeral += symbol;
//       num -= value;
//     }

//     if (num === 0) {
//       break;
//     }

//     const nextSymbol = obj[key - 1][0];
//     const nextValue = obj[key - 1][1];

//     if (num >= value - nextValue && nextValue !== 1000) {
//       romanNumeral += nextSymbol + symbol;
//       num -= value - nextValue;
//     }
//   }

//   return romanNumeral;
// }

// // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// // console.log(convertToRoman(36));

function convertToRoman(num) {
  const romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (let symbol in romanSymbols) {
    while (num >= romanSymbols[symbol]) {
      romanNumeral += symbol;
      num -= romanSymbols[symbol];
    }
  }

  return romanNumeral;
}



// do not edit below this line
module.exports = convertToRoman
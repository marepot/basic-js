const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  console.log(arr.indexOf("--discard-next"));
 if (arr.includes("--discard-next")==true){
 let n =arr.indexOf("--discard-next");
  arr.splice(n, 2);
  return arr;
 }
 else if (arr.includes("--discard-prev")==true){
 let n = arr.indexOf("--discard-prev");
 arr.splice(n-1,2);
 return arr;
 }
 else if (arr.includes("--double-next")==true){
 let n = arr.indexOf("--double-next");
 arr.splice(n,0,arr[n+1]);
 arr.splice(n+1,1);
 return arr;
 }
 else if (arr.includes("--double-prev")==true){
 let n = arr.indexOf("--double-prev");
 arr.splice(n,0,arr[n-1]);
 arr.splice(n+1,1);
 return arr;
 }
}

module.exports = {
  transform
};

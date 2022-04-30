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
function transform( arr ) {
 if (arr.isArray==false){
    throw new console.error("\'arr\' parameter must be an instance of the Array!");
  }  
  else if (arr.length==0){
    return arr;
  }
 else if (arr.includes("--discard-next")==true){
 let n =arr.indexOf("--discard-next");
 if (n==arr.length){
   arr.splice(n,1);
 }else{
  arr.splice(n, 2);
 }
 return arr;
 }
 else if (arr.includes("--discard-prev")==true){
 let n = arr.indexOf("--discard-prev");
 if (n>0){
 arr.splice(n-1,2);
 }
 else{
  arr.splice(n,1);
 }
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

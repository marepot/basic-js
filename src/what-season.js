const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
 const isValid = new Date(date).toISOString();
console.log(isValid);
let month= date.getMonth();
if (date==null){
throw new Error('Unable to determine the time of year!');
}
else if (isNaN()) {
throw new Error('Invalid date!');
}
else{ 
if (month>1&&month<5){
return 'spring';
}
if (month>4&&month<8){
return 'summer';
}
if (month.month>7&&month<11){
return 'autumn';
}
else {
return 'winter';
}}
}

module.exports = {
  getSeason
};

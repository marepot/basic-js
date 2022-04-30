const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  function createDreamTeam(members) {
let team=members.map(name => name[0])
  team.sort( (a, b) => a.localeCompare(b,{ ignorePunctuation: true }));
	 
return team.filter(element => {
  return element !== undefined;
});
}
}
module.exports = {
  createDreamTeam
};

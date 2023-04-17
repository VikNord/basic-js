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
function createDreamTeam(members) {
  let name = [];
    if(Array.isArray(members) == false) {
      return false}
  if(members.length == 0){
    return false
  }
    for ( let i = 0; i < members.length; i++) {
      if(typeof members[i] === 'string') {
        name.push(members[i].trim())
      }
    }
    name = name.sort((a,b) => a.localeCompare(b));

   let result = "";
    for (let i = 0; i < name.length; i++){
      result = result + name[i][0]
    }
    return result.toUpperCase();
  }

module.exports = {
  createDreamTeam
};

//-----------------Superset function--------------//

/**
 *@param {*} setA
 *@param {*} setB
 *@description:
    1]We loop through all the elements of setB
    2]If setA has all the elements we return true
    3]Else we return false
 */

const isSuperSet = (setA, setB) => {
  for (var elem of setB) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}; //javascript function definition

console.log(isSuperSet(new Set([1, 2, 3, 4, 5]), new Set([6, 2, 5])));

/**
 *
 * @param param {array}
 * @param n {number}
 * @returns  It returns true or false
 * @description : This is a searching technique for finding an element in an array
 * whether sorted or unsorted.
 * @example LinearSearch([1,2,3,4,5],3); //function call
 */
var LinearSearch = function (param, n) {
  for (var i = 0; i < param.length - 1; i++) {
    if (param[i] === n) {
      return true;
    }
  }
  return false;
}; //typescript function definition
//function call
console.log(LinearSearch([1, 3, 4, 2, 6, 5], 3)); //function call

module.exports = LinearSearch;

//map
/**This creates a new array of the existing one that passes the conditions
 */
var array1 = [
  { name: "chidalu" },
  { name: "fortune" },
  { name: "justice" },
  {},
]; //javascript array definition

//we mostly use this to originally access json files
var result = array1.map((x) => (x.name == "chidalu" ? x.name : false));
console.log(result);

/**.filter
 * This loops through an array and returns only the elements that passes the conditionals
 */
var result = array1.filter((x) => x.name !== "fortune");
console.log(result);

/**.reduce((a,c)=>)
 * This is used to add the elements of an array together
 */
var array2 = [...Array(5).keys()]; //javascript array definition
var result = array2.reduce((a, x) => a + x, 0);
console.log(result);

//---------------Intersection of a set ----------------------//
//We can check if there occur intersection between two sets
/**
 *
 * @param {Set}  setA - The first set
 * @param {Set} setB - The second set
 * @example Intersection(new Set([1,2,3,4]),new Set([4,5,6,7]))
 * @description
 * 1] We loop through the sets and try to find the element that is present in both
 * sets
 * 2]We store the intersects in a new set named Intersect
 * 3]We show the intersects
 */

const Intersection = (setA, setB) => {
  const Intersect = new Set(); //set declarations
  for (var i of setB) {
    if (setA.has(i)) {
      Intersect.add(i);
    }
  }
  return Intersect;
};

const result = Intersection(new Set([1, 2, 3, 4]), new Set([5, 2, 6, 7, 1])); //function call
console.log(result);

/**
 * Object is mutable
 */

const Animals = {
  dogs: {
    head: 1,
    tails: 1,
    wings: 0,
  },
  aves: {
    head: 1,
    tails: 0,
    wings: 1,
  },
}; //javascript object definition

//dot operator
/**
 * We use this to access the values of an object
 */
console.log(Animals.aves);
Animals.pigs = { head: 1, tail: 1, wings: 0 }; //object definition
console.log(Animals);

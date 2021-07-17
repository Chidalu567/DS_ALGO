//closures
/*Closures are function that return another function*/
const add = (x) => {
  //(1)
  //
  //
  return function (y) {
    //(2)
    return x + y;
  };
}; //javasctipt function definition

const add1 = add(1); //first function call 1
const add2 = add1(3); //second function call 2
console.log(add2); //answer:4

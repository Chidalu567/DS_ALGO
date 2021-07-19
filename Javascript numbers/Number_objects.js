//math.floor() gives the integeral part of a decimal
//math.ceil() adds one to the integral part of a decimal extimates
//math.round() performs normal rounding operation

const a = Math.floor(1.2);
console.log(a);

const b = Math.ceil(1.2);
console.log(b);

const c = Math.round(2.8);
console.log(c);

console.log(0.1 + 0.2 === 0.3); //false because of the 32--bit of javascript

//We use Number.EPSILON for checking approx
//Number.EPSILON gets the difference between the two prams in 32 bit making iit greater than the x-y
function add(x, y) {
  return x - y < Number.EPSILON;
}

console.log(add(0.1 + 0.2, 0.3));

//Infinity,Max_value,Min_value,Max_Safe_value,Min_Safe_value,-Infinity
//          decimal   decimal    integer       integer

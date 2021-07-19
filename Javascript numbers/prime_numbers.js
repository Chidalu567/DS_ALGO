//Prime-> 1 and itself
//we iterate from 2->n-1 beacause we only need numbers that n is greater than and we only need numbers that can divide n
//we make sure that n is not <=1
const isPrime = (n) => {
  //if n is <=1
  if (n <= 1) return false;

  //we loop from 2->n-1 to get the numbers that can divide it
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false; //factor
  }
  return true; //prime is found
}; //javascript function definition

console.log(isPrime(8));

//the time complexity is O(n)

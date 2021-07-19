const primeFactor = (n) => {
  //we know that 2 divides even numbers so we use 2 to deteroite n
  //we show the number of time 2 divides n
  //then pass the remainder to nex block
  if (n % 2 == 0) {
    var count = 0;
    while (n % 2 == 0) {
      count++;
      n /= 2;
    }
    console.log(2, count);
  }

  //for i greater than square root of n we know we have a prime we pass it to next block
  for (var i = 3; i * i <= n; i++) {
    if (n % i == 0) {
      var count = 0;
      while (n % i == 0) {
        count++;
        n /= i;
      }
      console.log(i, count);
    }
  }

  //the prime number id printed
  if (n > 2) {
    console.log(n);
  }
}; //javascript function definition

primeFactor(66); //function call

//time complexity O(sqrt(n))

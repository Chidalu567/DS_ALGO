const primeFactor = (n) => {
  if (n % 2 == 0) {
    var count = 0;
    while (n % 2 == 0) {
      count++;
      n /= 2;
    }
    console.log(2, count);
  }

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

  if (n > 2) {
    console.log(n);
  }
}; //javascript function definition

primeFactor(66); //function call

//time complexity O(sqrt(n))

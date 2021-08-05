const countDownToZero = (n) => {
  if (n < 0) {
    return n; //end the call
  } else {
    console.log(n);
    countDownToZero(n - 1); //recursive call
  }
}; //javascript function definition

countDownToZero(12); //initial call

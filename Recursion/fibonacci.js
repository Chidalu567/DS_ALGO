// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   var sum = 0,
//     last = 1,
//     lastlast = 0;
//   for (i = 1; i < n; i++) {
//     sum = last + lastlast; //last two terms for precedding term
//     lastlast = last;
//     last = sum;
//   }
//   return sum;
// }

/**
 * fibonacci algorithm using the recursion
 */
//--------------------callstack----------------------//
// fibo(12)=fibo(11)+fibo(10);
// fibo(11)=fibo(10)+fibo(9);
// //--------------------and-so-on----------------------//
// fibo(4)=fibo(3)+fibo(2)//=3+2=5
// fibo(3)=fibo(2)+fib(1)//=2+1=3
// fibo(2)=fibo(1)+fibo(0)// = 1 + 1 = 2 since x<=1 >> 1

//-----------------end-of-callstack-----------------//

function nthFibo(n) {
  if (n <= 1) {
    return n; //base case
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2); //current term + last term
  }
}

var result = nthFibo(12);

//-------------------------Tail-recursion---------------------//
//Tail recursion is the efficient way to perform a recursive function
//example the fib in Tail recursion
//structure of fib  (last,lastlast)=(lastlast+last,last); we are moving one stepp ahead and we are interchanging the value of each term

function fibo(n, curr, prev) {
  //-----if n =11
  if (n == 0) {
    return prev;
  }
  if (n == 1) {
    return curr;
  }
  //call the function n=10, curr=2, prev=2
  return fibo(n - 1, prev + curr, curr); //decrement the value of n and interchange the values
}

//---------------------call stack --------------------//
//0(prev),1(curr)

var result = fibo(12, 1, 0);
console.log(result);

function pascal(row, col) {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    //-----col1  col2   col3
    //-----|-----|------|--------------// row 1
    //-----5-----5------5---------------// row 2
    //-----|--10-|--10--|---------------// row 3
    return pascal(row - 1, col) + pascal(row - 1, col - 1);
  }
}

var result = pascal(6, 2);
console.log(result);

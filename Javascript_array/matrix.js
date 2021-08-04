//3by3 matric in javascript can be manually done
var matrix3by3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //javascript array definition

console.log(matrix3by3[1][2]);
console.log(matrix3by3.length);

//project on matrix spiral print
var M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [, 16, 17, 18, 19, 20],
]; //javascript array definition

function spiralPrint(param) {
  var toprow = 0,
    leftcol = 0,
    rightcol = param[0].length - 1,
    bottomrow = M.length - 1; //multiple variable definition
  //toprow and left col must be lesser than the rightcol and bottomrow
  while (toprow < bottomrow && leftcol < rightcol) {
    //print the first row based on ij (i-row,j=col)
    for (var col = 0; col <= rightcol; col++) {
      console.log(param[toprow][col]);
    }
    toprow++;

    //print from top to bottom printing the last element

    for (var row = toprow; row <= bottomrow; row++) {
      console.log(param[row][rightcol]);
    }
    rightcol--;

    //printing from right to left of bottom row
    if (toprow <= bottomrow) {
      for (var col = rightcol; col >= 0; col--) {
        console.log(param[bottomrow][col]);
      }
      bottomrow--;
    }

    //printing from right to left of leftcol
    if (leftcol <= rightcol) {
      for (var row = bottomrow; row > toprow; row--) {
        console.log(param[row][leftcol]);
      }
      leftcol++;
    }
  }
}

//function call
spiralPrint(M);
//time complexity is O(mn); //that is the time complexity of matrices

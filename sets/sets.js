//--------------Sets declaration in javascript--------------//
const mySet = new Set(); //set declaration
//set is different from an object since it cannot embedded another set in itself

//--------------Insertion in set----------------------------//
mySet.add(1); //this adds an element to a set
mySet.add(2); //this adds an element to a set
mySet.add(4); //insert an element into a set

console.log(mySet);

//--------------Deletion in set------------------------------//
var result = mySet.delete(2); //delete an element from a set
console.log(mySet, result);

//--------------Querying in set-----------------------------//
var result = mySet.has(4); //Querying in a set
console.log(result);

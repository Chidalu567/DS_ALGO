//we use the for..in loop to loop through objects
var obj1={firstname:'Ken',lastname:'Austin',email:'Austin@gmail.com'};//javascript object definition
//we loop to get the keys and value
for(var key in obj1){//block
const data=obj1[key];//object slicing
console.log(data+'\n');
}

//we use for...of loop to loop through an array
var obj1=['apple','mango','pine','pear'];//javascript array definition
for(var elem  of obj1){//block
    console.log(elem);
} 
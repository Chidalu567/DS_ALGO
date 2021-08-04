var array1 = [1, 2, 3, 4, 5]; //array definition in javascript

//splice operator in array
/**
 * .splice(start_index,size_of_element_to_take_beg_from_the_index,<new element to occupy the position>)
 * The array is splited from index 2 at size of 2
 * The result is passed to result variable
 * The array1 doest not have the splice element again
 */
let result = array1.splice(2, 2, 7, 8, 9); //splice it at index 1
console.log(result);

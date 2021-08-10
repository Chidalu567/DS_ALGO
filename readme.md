## Data structures and algorithm in javascript

## B01

-- Classes B004 <br/>
-- Getters and setters <br/>
-- closures B003 <br/>
-- loops

## Big o notation

<p>We use the big o to detect and optimize the performance of an algorithm</p>

## Folders

- ### objects folder
  - objects.js
    - This explains the data structure of objects in javascript. We would be able to deeply understand the structure of javascript objects

* ### Memory management

  `<p> When we take a deeper understanding of javascript v8 engine, we see that the v8 engine has an automatic garbage collector unlike other languages like c and c++ which has to be done manually; But in come cases it is seen to have **Leak**, we would look at some of the pitfalls that most developers make and try to avoid them.
  </p>`

* ### Memory leak

    <p>Memory leak is the inablility of a garbage collector to correctly dispose any unused memory caused by unused variables declaration</p>
    
    > Any variable declared that is not assigned any value is seen to be a garbage and is to be disposed by the garbage collector.

  ```javascript
  var foo = {
    bar1: memory(), ^5kb
    bar2: memory(), ^5kb
  };

  function test() {
    console.log(foo.bar1);
  }
  //the function uses 10kb beacause the javascript engine will have to run every thing in the object. Even though only the bar 1 is used the bar2 still sumup in the memory
  ```

* ### Leaking Dom
<p>When a dom element is assigned to a variable and is deleted and still used again this could cause a memory leak e.g

```javascript
var one = document.getElementById("one");
var two = document.getElementById("two");

one.addEventListener("click", () => {
  two.delete();
});
```

This above is an example of memory loss to avert this we define the variable in the function and remove the event listener so that we can delete it without having a dom leak

```javascript
var one = document.getElementById("one");
const callback = (e) => {
  var two = document.getElementById("two"); //get element by id of two
  two.remove(); //remove the dom element
  one.removeEventListener("click", callback); //remove the event listener and delete the dom element
};
one.addEventListener("click", callback);
```

This code above is ran twice to completely remove the dom and avoid dom leaking

</p>

- ### Window
  It is advisable to avoid global variables because they stay on the windows and do not remove anyway. we use let and const to declare variable not var to avoid memory leak due to window object

* ### Limiting object reference
  We could see that the above object passed to a function can cause memory leak. It is advisable to pass only the useful property to a function not all the object property. This is an optimized way of saving memory

```javascript
var Animal = {
  dogs: { head: 1, tail: 1, wings: 0 }, ^5kb
  humans: { head: 1, tail: 0, wings: 0 }, ^5kb
};
function call(param) {
  console.log(param);
}
call(Animal.dogs); //passs the property to a function instead of passing all the object; The total memory used will be only 5kb
```

<p>
* Avoid using global variables all the time 
* Only pass the property of an object to be used as paramter to the function
* Do not ref a dom that has already been deleted
* Delete any variable that is not in use
</p>

## SETS

<p>A set is a group of objects , artifacts together. In layman's term it is a collection of unordered group of numbers that are unique.The time complexity of a set is O(1)</p>

```javascript
var mySet={1,2,3,4};//this is an example of a set
/*The subsets are {0} {1} {2} {3} {4} {1,2} {1,3} and so on*/

```

> Set is a very powerful data type for checking uniqueness in data collected from a raw source

### Set operations

- Insertion:
  This is the operation that involves add elements to the set. It does not accept duplicates
  Set.add(x);//this adds an element to a set

- Deletion:
  Set.delete()
  removes an element from a set and returns a boolean value.
- Query:
  Set.has(n) checks if an element is present in a set.

> We can also write algorithms for intersection of a set.

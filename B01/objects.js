//Getters
var Person = {
  log: ["Ade", "Cars", "Houses"],
  get showLog() {
    return this.log;
  },
}; //javascript object definition

console.log(Person.showLog + "\n");

//Setters
var Person = {
  log: [],
  set setLog(pram) {
    this.log = pram; //updating the object property
  },
}; //javascript object definition

Person.setLog = ["Ade", "Houses", "cars", "Pools"];
console.log(Person.log);

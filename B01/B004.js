//class
class Dog {
  constructor(name, owner) {
    //class constructor
    this.name = name; //class field or variable
    this.owner = owner; //class variable or field
  }
  dogInfo() {
    //class method
    return { name: this.name, owner: this.owner };
  }
}

const d1 = new Dog("ken", "Fortune"); //instance variable
console.log(d1.dogInfo());

//extends
class Security_Dog extends Dog {
  constructor(name, owner) {
    //class constructor
    super(); //puts all field in parent class here
    this.name = name;
    this.owner = owner;
  }
  dogInfo() {
    //class method
    return { name: this.name, owner: this.owner };
  }
}

const d2 = new Security_Dog("Roy", "Fortune"); //instance variable
console.log(d2.dogInfo());

//restrictions
//private field:/* Private fields are fields that are only accessable to the scope of the class */
//static
//#

class Bank {
  static acc_num = "xxx-xxx-xxx"; //static field
  developer = "Fort"; //global field
  static #password = "qwerty"; //private field
  constructor(username) {
    //class constructor
    this.username = username;
  }

  get userPass() {
    return Bank.#password;
  }
} //javascript class definition

const user1 = new Bank("Micheal"); //class instance variable definition
console.log(user1.developer);
console.log(Bank.acc_num);
console.log(user1.userPass);

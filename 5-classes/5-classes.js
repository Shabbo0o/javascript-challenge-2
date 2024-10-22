
class Person {
    constructor(studentAt, studentName, studentAge){
        this.studentAt = studentAt;
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
}

let person= new Person("Chas", "Anna", 30);

console.log(person)

person.favoriteFoods= ["Pasta", "Pizza", "Stake", "Fish"]


Person.prototype.nameAndAge = function(){
    console.log(person.studentName + person.studentAge);
console.log(person.nameAndAge);

console.log("Name: ",person.studentName+", Age: "+person.studentAge);
}

person.eyeColor = "Brown";
console.log(person);


class Dog {
  constructor() {
      this.labrador = new Labrador();
  }
}

class Labrador {
  constructor() {
      this.adult = new Adult("Marley");
      this.puppy = new Puppy("Buster");
  }
}

class Adult {
  constructor(name) {
      this.name = name;
  }
}

class Puppy {
  constructor(name) {
      this.name = name;
  }
}

const dogs = new Dog();

console.log(dogs);
console.log(dogs.labrador.puppy.name);  





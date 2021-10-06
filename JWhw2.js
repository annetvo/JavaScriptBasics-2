//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
        this.name = name;
        this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
    this.addAge = (age) => {
        this.age++;
    }
}
// Create another arrow function for the addAge method that takes a single parameter
let personA = new Person (`Naruto Uzumaki`, 13);
console.log(personA.printInfo());
// Adding to the age 
personA.addAge();
personA.addAge();
personA.addAge();
console.log(personA.printInfo());

let personB = new Person (`Itachi Uchiha`, 16);
console.log(personB.printInfo());








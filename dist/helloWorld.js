/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISE: EXERCISE: HELLOWORLDIN JS/TS, slide 9 ///////////////
let message = "Hello World Mai";
console.log(message);
var name2 = "Christian"; // old js - dont do this anymore.
let name3 = "Mai"; // variable
const name4 = "Sophie"; // constant og kan ikke ændres
name3 = "Majfkdasjæflkdsæl"; // kan let ændres
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// FUNCTIONS, slide 10 //////
// A function is a way to order and re-use pieces of code. A function can take parameters (input) and can return something(response).
// FX function syntax
function add(a, b) {
    return a + b;
}
// Here I am creating a constant called result
// It is populated with the result of calling the function add with parameters
// 5 and 7.
// This generates an error.s
//console.log(add('Mai', 5));
const result = add(5, 7);
const result2 = add(2, 5);
const result3 = add(2, 5);
console.log(result);
console.log(result2);
console.log(result3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISES: FUNCTIONS & OBJECTS, slide 14 //////
// Createa typescript function that takes first name and last name as 2 parameters and uses console.log() to output the person's name. Check that it works and is printed correctly.
function printName(firstname, lastname) {
    console.log(firstname + " " + lastname);
}
printName("Mai", "Hansen");
// Create a typescript function that calculates the area of a rectangle. The function should return the result. Test that it works.
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));
// Create a typescript function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again.
function calculateDistance(speed, time) {
    return speed * time;
}
// Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
const distance = calculateDistance(60, 2);
console.log("You have travelled " + distance + " km");
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISE: CLASS/CATS, slide 18 //////
// Blueprint for creating cat objects
class Cat {
    // creates an object
    // Create a constructor that takes 5 parameters to create an object with name, color, breed and such.
    constructor(name, gender, species, color, birthdate) {
        this.catname = name;
        this.gender = gender;
        this.species = species;
        this.color = color;
        this.birthDate = birthdate;
    }
    // Create a function/method that returns the cat's data.
    getCatname() {
        // getting name
        return this.catname;
    }
    // Create a function that can change the cat's name.
    setCatname(newName) {
        // setting or changing the name
        this.catname = newName;
    }
}
// Here I am using the constructor of the Cat class to create cat objects.
let myCat1 = new Cat("Whiskers", "Female", "Maine Coon", "White");
let myCat2 = new Cat("Bernie", "Male", "British shorthair", "Blue", new Date(2026, 0, 1));
console.log(myCat2.getCatname()); // retrieve name of cat object
console.log(myCat1);
console.log(myCat2);
// javascript destructuring
const { catname, gender, species, color } = myCat1;
console.log("catname", catname);
// let cat = {name: 'Charlie', gender: 'Male', species: 'Maine Coon', color: ''};
// cat.color = 'Brown';
//console.log(cat);
// [] means array. number[] means number-array.
let numbers = [1, 5, 3, 8, 3];
numbers.push(5); //push adds a new element to the existing array.
console.log(numbers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISE: CAR, slide 19 ///////////////
// Define the car class
class Car {
    // Add a constructor that accepts make, model, and year as parameters and initializes these properties.
    // creates an object
    constructor(make, model, series, year, color) {
        this.make = make;
        this.model = model;
        this.series = series;
        this.year = year;
        this.color = color;
        this.isRunning = false;
    }
    // Get car info method
    getCarInfo() {
        return `${this.make} ${this.model} (${this.series}) (${this.year}) (${this.color})`;
    }
    //start method
    start() {
        this.isRunning = true;
        return `${this.make} ${this.model} has started.`;
    }
    // stop method
    stop() {
        this.isRunning = false;
        return `${this.make} ${this.model} has stopped.`;
    }
}
// Create two instances
const car1 = new Car("Toyota", "Corolla", "Sport", 2020, "Red");
const car2 = new Car("BMW", "X5", "M-Sport", 2022, "Black");
// Test methods on car1
console.log(car1.getCarInfo());
console.log(car1.start());
console.log(car1.stop());
// Test methods on car2
console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.stop());
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISE: ARRAYS slide 22 ///////////////
// Create an array with 5 names. Print out the firstelement (name) usingconsole.log()
let names = ["Anna", "Peter", "Maria", "Jonas", "Sofie"];
// Print out the first element (name)
console.log(names[0]);
// Use the indexOf function to get the index of a name that exists in your array
console.log(names.indexOf("Peter"));
// Try the indexOf function with a name that does not exist. What is returned?
console.log(names.indexOf("Lars")); // returns -1
// Use the push function to add a new name to the array of names, so you have 6 names in the array
names.push("Lars");
console.log(names);
// Use the slice function on the array, to create a new array with the first 3 names
let firstThreeNames = names.slice(0, 3);
console.log(firstThreeNames);
// Create 2 objects with firstname, lastname, email values
const person1 = {
    firstname: "Christian",
    lastname: "Kirschberg",
    email: "kirs@cphbusiness.dk"
};
const person2 = {
    firstname: "Mathias",
    lastname: "Nielsen",
    email: "mtnl@cphbusiness.dk"
};
// Add the two objects to a new array
let people = [];
people.push(person1);
people.push(person2);
console.log(people);
// Log the first object's email in a separate log
console.log(people[0].email);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Frontend - 01- Javascript and Typescript.pdf ///////////////
/////////////// EXERCISE: ARRAYS & OBECTS, slide 23 ///////////////
// CREATE A STUDENT CLASS
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    updateStudentName(newName) {
        this.name = newName;
    }
}
// ADD GRADES
// Create a student object
const student1 = new Student("Anna", 1);
// Add a few grades to the student
student1.addGrade(7);
student1.addGrade(10);
student1.addGrade(12);
// UPDATE STUDENT NAME
// Update the student's name
student1.updateStudentName("Anna Jensen");
// Print the updated object
console.log(student1);
//# sourceMappingURL=helloWorld.js.map
let message: string = "Hello World Mai";
console.log(message);

var name2 = "Christian"; // old js - dont do this anymore.
let name3 = "Mai"; // variable
const name4 = "Sophie"; // constant
name3 = "Majfkdasjæflkdsæl";

function add(a: number, b: number) {
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

// Blueprint for creating cat objects
class Cat {
  catname: string;
  gender: string;
  species: string;
  color: string;
  birthDate: Date;

  // creates an object
  constructor(name: string, gender: string, species: string, color: string, birthdate?: Date) {
    this.catname = name;
    this.gender = gender;
    this.species = species;
    this.color = color;
    this.birthDate = birthdate;
  }
  getCatname() {
    // getting name
    return this.catname;
  }
  setCatname(newName: string) {
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
let numbers: number[] = [1, 5, 3, 8, 3];
numbers.push(5); //push adds a new element to the existing array.
console.log(numbers);

// let people = []; // creates an empty array
// const person1 = { firstname: "Christian", lastname: "Kirschberg", email: "kirs@cphbusiness.dk" };
// people.push(person1);
// people.push({ firstname: "Mathias", lastname: "Nielsen", email: "mtnl@cphbusiness.dk" });

// console.log(people);
// const person2 = people[0]; // gets the first person in the peoples array
// console.log(person2);

////// 01 EXERCISES: FUNCTIONS & OBJECTS //////
function printName(firstname: string, lastname: string) {
  console.log(firstname + " " + lastname);
}
printName("Mai", "Hansen");

function calculateArea(width: number, height: number): number {
  return width * height;
}
console.log(calculateArea(5, 10));

function calculateDistance(speed: number, time: number): number {
  return speed * time;
}
const distance = calculateDistance(60, 2);
console.log("You have travelled " + distance + " km");

/////////////// 01 EXERCISE: CAR ///////////////
class Car {
  make: string;
  model: string;
  series: string;
  year: number;
  color: string;
  isRunning: boolean;

  // creates an object
  constructor(make: string, model: string, series: string, year: number, color: string) {
    this.make = make;
    this.model = model;
    this.series = series;
    this.year = year;
    this.color = color;
    this.isRunning = false;
  }
  getCarInfo(): string {
    return `${this.make} ${this.model} (${this.series}) (${this.year}) (${this.color})`;
  }
  start(): string {
    this.isRunning = true;
    return `${this.make} ${this.model} has started.`;
  }
  stop(): string {
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

/////////////// 01 EXERCISE: ARRAYS ///////////////
// Create an array with 5 names
let names: string[] = ["Anna", "Peter", "Maria", "Jonas", "Sofie"];

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

/////////////// 01 EXERCISE: ARRAYS & OBECTS ///////////////
class Student {
  name: string;
  id: number;
  grades: number[];

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.grades = [];
  }

  addGrade(grade: number): void {
    this.grades.push(grade);
  }

  updateStudentName(newName: string): void {
    this.name = newName;
  }
}

// Create a student object
const student1 = new Student("Anna", 1);

// Add a few grades to the student
student1.addGrade(7);
student1.addGrade(10);
student1.addGrade(12);

// Update the student's name
student1.updateStudentName("Anna Jensen");

// Print the updated object
console.log(student1);
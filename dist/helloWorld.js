let message = 'Hello World Mai';
console.log(message);
var name2 = 'Christian'; // old js - dont do this anymore.
let name3 = 'Mai'; // variable
const name4 = 'Sophie'; // constant
name3 = 'Majfkdasjæflkdsæl';
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
// Blueprint for creating cat objects
class Cat {
    // creates an object
    constructor(name, gender, species, color, birthdate) {
        this.catname = name;
        this.gender = gender;
        this.species = species;
        this.color = color;
        this.birthDate = birthdate;
    }
    getCatname() {
        return this.catname;
    }
    setCatname(newName) {
        this.catname = newName;
    }
}
// Here I am using the constructor of the Cat class to create cat objects.
let myCat1 = new Cat('Whiskers', 'Female', 'Maine Coon', 'White');
let myCat2 = new Cat('Bernie', 'Male', 'British shorthair', 'Blue', new Date(2026, 0, 1));
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
let people = []; // creates an empty array
const person1 = { firstname: 'Christian', lastname: 'Kirschberg', email: 'kirs@cphbusiness.dk' };
people.push(person1);
people.push({ firstname: 'Mathias', lastname: 'Nielsen', email: 'mtnl@cphbusiness.dk' });
console.log(people);
const person2 = people[0]; // gets the first person in the peoples array
console.log(person2);
//# sourceMappingURL=helloWorld.js.map
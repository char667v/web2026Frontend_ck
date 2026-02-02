let message: string = 'Hello World Mai';
console.log(message);




var name2 = 'Christian'; // old js - dont do this anymore.
let name3 = 'Mai'; // variable
const name4 = 'Sophie'; // constant
name3 = 'Majfkdasjæflkdsæl';

function add(a: number, b: number) {
    return a+b;
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
    constructor(name: string, gender: string, species: string, color: string, birthdate?: Date){
        this.catname = name;
        this.gender = gender;
        this.species = species;
        this.color = color;
        this.birthDate = birthdate;
    }
    getCatname() { // getting name
        return this.catname;
    }
    setCatname(newName: string) { // setting or changing the name
        this.catname = newName;
    }

}
// Here I am using the constructor of the Cat class to create cat objects.
let myCat1 = new Cat('Whiskers', 'Female', 'Maine Coon', 'White');
let myCat2 = new Cat('Bernie', 'Male', 'British shorthair', 'Blue', new Date(2026, 0, 1));
console.log(myCat2.getCatname()) // retrieve name of cat object

console.log(myCat1);
console.log(myCat2);

// javascript destructuring
const {catname, gender, species, color } = myCat1;
console.log("catname", catname);


// let cat = {name: 'Charlie', gender: 'Male', species: 'Maine Coon', color: ''};
// cat.color = 'Brown';


//console.log(cat);

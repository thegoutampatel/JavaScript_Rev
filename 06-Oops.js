//Prototypes -> It means extra properties in given datatype.
//Inheritance -> It means one class can inherit the properties of another class.
//Class -> It is a blueprint of an object.
//Object -> It is an instance of a class.
//Abstraction -> It means hiding the complexity of the code.
//Encapsulation -> It means binding the data with the functions that manipulate the data.
//Polymorphism -> It means one function can be used for different types of objects.

// {PROTOTYPES}
// 1st Way of Doing this 

// let Computer = {CPU : 64};
// let mac = {
//     Ram: "4gb",
//     screen: "128gb"
//     //__proto__: Computer //work in brower the older way to get the properties of the other.
// }   

// let Hardware = {}

// console.log(`mac`, mac.__proto__)       


// 2nd way of Doing this but in this way it can't be suggested

// let GenericCar = {typers: 4};

// let Toyota = {
//    driver : "AI" 
// }

// Object.setPrototypeOf(Toyota, GenericCar);
// console.log("Toyata", Toyota.typers);


// 3rd way of Doing this
// let GenericCar = {typers: 4};

// let Toyota = {
//    driver : "AI" 
// }

// Object.setPrototypeOf(Toyota, GenericCar);

// console.log("Toyata", Object.getPrototypeOf(Toyota)); //It will give the prototype of the object.

// ----------------------------------------------------------------------------------------------------------------------------
//Function Constructor

function Person(name, age){
    this.name = name;         //this.name is we created but the RHS name is the parameter of the function.
    this.age = age;             


}

function Car(Model, year){
    this.Model = Model;
    this.year = year;
}

let myCar = new Car("Toyota", 2020);
// console.log(myCar);

let newCar = new Car("Tata", 2010);
// console.log(newCar);

// Output 
// Car { Model: 'Toyota', year: 2020 }
// Car { Model: 'Tata', year: 2010 }


function Animal(Species){
    this.Species = Species;
}

//this is the prototype of the function.
//we add a new function to Animal function constructor.
Animal.prototype.Sound = function(){
    return `${this.Species} makes a sound`;
}

let dog = new Animal("Dog");

// console.log(dog.Sound());

function Drink(name){
    if(!new.target){
        throw new Error(` Drink must with new`);      //This is how we shows error when it not use with NEW keyword
    }
    this.name = name;   
}

let chai = new Drink("Chai");
console.log(chai)
let coffee = Drink("Coffee");

    
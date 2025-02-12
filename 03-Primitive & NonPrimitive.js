//In JS we create Everything as an Obj

let Num = 120; //this one is of type Number

let NewNum = new Number(120); // This is Same but it Create as An Obj but it is not a recommonded way.
console.log(typeof(Num), Num);
console.log(typeof(NewNum), NewNum);

//Strings
let fname = "Raj";
let lname = 'Malhotra';

let FullName = fname + " " + lname;
// let FullName = fname + " Malhotra";
console.log(FullName);

//String BackTicks {call String Interpulation}

let Greed = `Hello ${fname} ${lname}. How are you?`;
console.log(Greed);



//Objects
let Obj = {
    company: "Google",
    domain: "WWW.Google.com",
    apps: "Gpay, Drive, Map",
    languages: "Dark",
    framworks: "Flutter",
    "Google CEO" : "Sundar pichai"
}


console.log(Obj["Google CEO"]) //when we have space in key we can use this way to access the value.
console.log(Obj , typeof Obj)   


//Arrays
let Arr = [1,2,3,4,5,6,7,8,9,10];
console.log(Arr, typeof Arr);
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits, typeof fruits);

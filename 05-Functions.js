
//Regular Function
function Greet(name) {
    console.log(`Hello ${name}`);

}

Greet('John');


//Arrow Function
const calculate = (price, quantity) =>{ 
    const total = price * quantity;
    return total;

}

console.log(calculate(10, 5));


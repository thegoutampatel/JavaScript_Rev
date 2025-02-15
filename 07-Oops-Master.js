let car = {
    company : "Toyota",
    model : 2020,
    maxSpeed : "180KM/H",
    price: 1000000,
    start : function(){
        return `${this.company} has price of his 2020 model is ${this.price}` 
    }
}

// console.log(car.start())

//This 
function Car(company, model,maxSpeed,price){
    this.company = company,
    this.model = model,
    this.maxSpeed = maxSpeed,
    this.price = price
}
Car.prototype.onRoadPrice = function(){
    return `this is the ${this.price + 10000} of a Thar`
}

let Thar = new Car("Mahendra", "Thar Top Model", "200Km/h", 500000,600000);

// console.log(Thar.onRoadPrice())




//Class
//in class if we decleared a funcition is called a method.
//in class Constructor is a Compolsory
class Vehicle{  
    constructor(make, model){
        this.make = make,
        this.model = model
    }

    //inside the class in method we don't need to type function we direct decleared

    start(){
        return `${this.model} is make by the ${this.make}`
    }
}

//inherite we use Extends Keyword
//if not provide the exted class it borrows from parent

class Cars extends Vehicle{

    drive(){
        return `I drive ${this.model}.`
    }
}

let myCars = new Cars("Mahindra", 2020)  
// console.log(myCars.start())
// console.log(myCars.drive())





//Encapsulation
class BankAcc{
    #balance = 0;       //# it prevent from inharite

    deposite(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return ` $ ${this.#balance}`
    }

}

let Acc = new BankAcc();
//now we only Access the balance with only this funciton not direct from Acc.balance or Acc.#balance
// console.log(Acc.getBalance());



//Abstraction

class coffee{
    
    start(){
        return `Coffee Machine is Started....`
    }

    SelectCoffee(){
        return `Please Select the Coffee`
    }

    PressButtonToCoffee(){
        let one = this.start();
        let two = this.SelectCoffee();

        return `${one} \n ${two}`
    }
}

let myMachine = new coffee();

// console.log(myMachine.start())
// console.log(myMachine.SelectCoffee())

// console.log(myMachine.PressButtonToCoffee());



 

//PolyMorphism
class Birds{
    fly(){
        return "Flying....."
    }
}

class Penguin extends Birds{
    fly(){
        return `Penguin can't Fly...`
    }
}

let bird = new Birds();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());
//this is the example of the plymorphism that it has a variety of the Birds that can fly and some can't but they are birds



class Calculator{

    //static is only be called class itself not by anyone.
    static add(a,b){
        return a+b;
    }
}

let cal = new Calculator()
// console.log(cal.add(2,3))       throgh an Error.
//console.log(Calculator(2,3))     it work because it call by direct class.


//Getters and Setters

class Employe{
    constructor(name, salary){
        this.name = name,
        this._salary = salary        //_ not affect
    }

    get salary(){
        return `You are not Allowed to see salary`
    }
    
    set salary(value){
        if(value<0){
            console.error("Invalid Salary")
        }
        else{
            this._salary = value
        }
    }
}

let emp = new Employe("Sourabh", -1);
// console.log(emp.salary)





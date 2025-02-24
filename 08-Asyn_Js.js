// Asynchronous - having a pause in language or code.
//need - Because of Netwok calls, database calls which need a pause for data, Read/Write Files, Time Ralated functions



function hello(){
    console.log("Hello EveryOne!")
}

//It take delay
//but it can't wait on code it execute the another code as well
setTimeout( ()=>{
    // hello()
}, 2000
)

//Closures - are the functions they remember the environment which they are created.

function outer(){
    let counter = 0
    return function(){
        counter++
        return counter
    }

}
let increment = outer()
console.log(increment());



//Promises and Asynch
//promises - is a utility provided by the js. the task which takes time to run or output we use the promises.

//promises in three states : fullfilled, rejected, pending

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data Fetch Successfully")
            }else{
                reject("Error in Fetching data")
            }
        },3000
        )
    })
}
fetchData()
    .then((data)=> console.log(data))
    .catch((error)=> console.error(error) )






//PrototypallInheritance
function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    // console.log(`HEllo ${this.name}`);
}

let Soru = new Person("soru")
Soru.greet()


//This and binding context
const person = {
    name: "Soru",
    greet(){
        // console.log(`Hi, i am ${this.name}`)
    },
}

person.greet()              //Hi, i am Soru

const greetFun = person.greet
greetFun()                  //Hi, i am undefined

const boundGreet = person.greet.bind({name: "Gourav"})       
boundGreet()                //Hi, i am Gourav

//research about this
//bind, call and apply





//Asyn Await & Promises 

function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({ 
                name: "Golu",
                url : "www.google.com",
            })
        },2000)
    })
}

async function getUserData() {
    try {
        console.log("Fetching User data ...")
        let userdata = await fetchUserData()
        console.log(userdata);

    } catch (error) {
        console.log("Error")
    }
}
getUserData()



    
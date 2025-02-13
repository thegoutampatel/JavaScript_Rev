/* 
while
do While
for
for in
for of
for each 
*/

//while
// let i = 5;
// let Coundown = [];
// while(i>=0){
//     Coundown.push(i);
//     i--;
// }
// console.log(Coundown);

// let TeaCollection = [];
// do{
//     let tea = prompt("Do you want some tea?");
//     TeaCollection.push(tea);
// }while(tea!="stop");

// console.log(TeaCollection);

//for

// let teas = ['Green Tea', 'Black Tea', 'Chai Tea', 'Chai', 'Earl Grey'];
// let SelectedTea = [];
// for(let i = 0; i<=teas.length; i++){
//     if(teas[i] == "Chai"){
//         break;
//     }
//     else{
//         SelectedTea.push(teas[i]);
//     }
// }
// console.log(SelectedTea);

let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
let selectedCities = [];

for(let i=0; i<cities.length; i++){
    if(cities[i] == "Islamabad"){
        continue;
    }
    else{
        selectedCities.push(cities[i]);
    }
}
console.log(selectedCities);


//For of
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for(let number of numbers){
//     // console.log(number);
// }

//For In
// let CitysPopullations = {
//     "India" : 1200000,
//     "Chaina": 1300000,
//     "USA": 10000
// }

// let CityPopulation = {}

// for (const key in CitysPopullations) {
//     console.log(CitysPopullations[key]);
    

// }

// console.log(Object.keys(CitysPopullations));


//For Each
let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

numbers.forEach(num => {
    // if (num != 4) {
    //     sum += num;
    // }

    console.log(num);
})
console.log(sum);
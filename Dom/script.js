let btn = document.getElementById("btn");
let cities = document.getElementById("citylist")

btn.addEventListener('click', function(){
    let c = cities.firstElementChild;
    c.classList.add("hightlight");
})
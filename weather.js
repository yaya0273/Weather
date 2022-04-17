let button = document.querySelector('.search')
let city = document.querySelector('.city')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');



  
button.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=089dc2d07e2d92b407f7a5d63f8fd2fb`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

})

const displayData=(weather)=>{
    temp.innerText=`Temperature : ${weather.main.temp}°C`

}
let button = document.querySelector('.search')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp');

button.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=089dc2d07e2d92b407f7a5d63f8fd2fb`)
    .then(response => response.json())
    .then(data)
    .catch(err => alert('Invalid City')); 

})

const data=(weather)=>{
    temp.innerText=`Temperature : ${weather.main.temp}°C`

}
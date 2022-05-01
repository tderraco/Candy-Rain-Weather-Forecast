function getInfo() {
    var newCity = document.getElementById(cityInput);
    var cityName = document.getElementsByClassName(cityName);
    cityName.innerHtml = " " +newCity.value+ " "
}

function getWeather(updateElementId) {
    var updateElement = document.getElementById(updateElementId)
    
    var searchCity = document.getElementById('cityInput').value;
   
    var weatherUrl ='https://api.openweathermap.org/data/2.5/weather?q='+searchCity+'&appid=b78af6d51bdd82064c6d6d57e27983e4&units=imperial'

    fetch (weatherUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
      
     
        var temp = data.main.temp;
        var wind = data.wind.speed;
        var humidity = data.main.humidity;
        var html = '<li>'+ 'Temp' + temp + '' + '' + 'F°' + '</li>' + '<li>' + 'Wind' + wind + '' + '' + 'MPH' + '</li>'+ '<li>' + 'Humidity' + 
        '' + '' + humidity + '%' + '</li>'     
        
        updateElement.innerHTML=html
        addCity(searchCity)
    })

    .catch(console.error)
}
function addCity(city){
    var cities= JSON.parse(localStorage.getItem('cities'))
    if (cities == undefined) {
        localStorage.setItem('cities',JSON.stringify([city]))
    } else {
        cities.push(city)
        localStorage.setItem('cities',JSON.stringify( cities))
    }
   
    displayCities();
    
  
}
function displayCities() {
   var container = document.getElementById('recent-searches') 
   var html= ''
   var cities= JSON.parse(localStorage.getItem('cities'))
   for (let cityIndex = 0; cityIndex < cities.length;cityIndex++) {
      var city = cities[cityIndex];
      html += '<div>' + city + '</div>'    
   }
   container.innerHTML=html
}


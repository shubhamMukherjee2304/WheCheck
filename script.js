const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '443715d775mshe07d6bd641414c0p123c73jsne075e27ad676',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML = city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            
        })

        
        .catch(err => console.error(err));
    }
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    getWeather("Delhi")



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            delcloud_pct.innerHTML = response.cloud_pct
            deltemp.innerHTML = response.temp
            delfeels_like.innerHTML = response.feels_like
            delhumidity.innerHTML = response.humidity
            delmin_temp.innerHTML = response.min_temp
            delmax_temp.innerHTML = response.max_temp
            delwind_speed.innerHTML = response.wind_speed
            delwind_degrees.innerHTML = response.wind_degrees
            
        })

    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            bancloud_pct.innerHTML = response.cloud_pct
            bantemp.innerHTML = response.temp
            banfeels_like.innerHTML = response.feels_like
            banhumidity.innerHTML = response.humidity
            banmin_temp.innerHTML = response.min_temp
            banmax_temp.innerHTML = response.max_temp
            banwind_speed.innerHTML = response.wind_speed
            banwind_degrees.innerHTML = response.wind_degrees
            
        })

        
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            kolcloud_pct.innerHTML = response.cloud_pct
            koltemp.innerHTML = response.temp
            kolfeels_like.innerHTML = response.feels_like
            kolhumidity.innerHTML = response.humidity
            kolmin_temp.innerHTML = response.min_temp
            kolmax_temp.innerHTML = response.max_temp
            kolwind_speed.innerHTML = response.wind_speed
            kolwind_degrees.innerHTML = response.wind_degrees
            
        })

        
.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            checloud_pct.innerHTML = response.cloud_pct
            chetemp.innerHTML = response.temp
            chefeels_like.innerHTML = response.feels_like
            chehumidity.innerHTML = response.humidity
            chemin_temp.innerHTML = response.min_temp
            chemax_temp.innerHTML = response.max_temp
            chewind_speed.innerHTML = response.wind_speed
            chewind_degrees.innerHTML = response.wind_degrees
            
        })

        
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            mumcloud_pct.innerHTML = response.cloud_pct
            mumtemp.innerHTML = response.temp
            mumfeels_like.innerHTML = response.feels_like
            mumhumidity.innerHTML = response.humidity
            mummin_temp.innerHTML = response.min_temp
            mummax_temp.innerHTML = response.max_temp
            mumwind_speed.innerHTML = response.wind_speed
            mumwind_degrees.innerHTML = response.wind_degrees
            
        })

        
.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad', options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)

            
            ahmcloud_pct.innerHTML = response.cloud_pct
            ahmtemp.innerHTML = response.temp
            ahmfeels_like.innerHTML = response.feels_like
            ahmhumidity.innerHTML = response.humidity
            ahmmin_temp.innerHTML = response.min_temp
            ahmmax_temp.innerHTML = response.max_temp
            ahmwind_speed.innerHTML = response.wind_speed
            ahmwind_degrees.innerHTML = response.wind_degrees
            
        })

        
.catch(err => console.error(err));
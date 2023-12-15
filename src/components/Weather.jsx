import { useEffect, useState } from "react";

function Weather() {

const weatherKey = "2749a85beba444bb900a49319521bbc0";
const weatherURL = "https://api.openweathermap.org/data/2.5/";

const [weatherData, setweatherData] = useState([]);


async function getData() {
    const response = await fetch (weatherURL + "weather?q=queens&units=metric&appid=" + weatherKey);

    const result = await response.json();

    setweatherData(result);
}

useEffect (function () {
    getData();    
}, [])


console.log(weatherData)
   





    return(
        <>
        <div className="weather-container">
            <h2>Current Weather</h2>
            <h3>{weatherData.name}</h3>
            <img className="weather-icon" src={"https://openweathermap.org/img/wn/"+ weatherData.weather?.[0].icon + ".png"} alt = "weathericon"></img>
            <h3>{Math.round(weatherData.main?.temp)}ºC</h3>
            <h3>{weatherData.weather?.[0].main}</h3>
            <h3>{weatherData.weather?.[0].description}</h3>
        </div>
        </>
    )
}

export default Weather;
import { useEffect, useState } from "react";

function Weather({cityWeather}) {

const weatherKey = "2cd7b6ab14f71dfaf8906c1a89abbbf4";
const weatherURL = "https://api.openweathermap.org/data/2.5/";



const [weatherData, setweatherData] = useState([]);

async function getData() {
    
    
    const response = await fetch (weatherURL + "weather?q="+ cityWeather?.weather_name + "&units=metric&appid=" + weatherKey);

    const result = await response.json();

    setweatherData(result);
    }


// console.log(weatherData)


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";

const [forecastInfo, setforecastInfo] = useState([]);



async function getForecastData() {

    const response = await fetch (forecastURL + "&lat="+ cityWeather?.lat + "&lon=" + cityWeather?.lon + "&units=metric&appid=" + weatherKey)

    const result = await response.json();

    const newResult = [
        result.list[0],
        result.list[8],
        result.list[16],
        result.list[24],
        result.list[32]
    ]



    setforecastInfo(newResult);

}


useEffect(function () {

    getData();
    getForecastData();


},[])
   
// console.log(forecastInfo)

    return(
        <>
        <div className="weather-container">

            <div className="current-weather">
                <h2>Current Weather</h2>
                <h3>{weatherData.name}</h3>
                <img className="weather-icon" src={"https://openweathermap.org/img/wn/"+ weatherData.weather?.[0].icon + ".png"} alt = "weathericon"></img>
                <h3>{Math.round(weatherData.main?.temp)}ºC</h3>
                <h3>{weatherData.weather?.[0].main}</h3>
                <h3>{weatherData.weather?.[0].description}</h3>
            </div>
            <hr/>
            <h3>Forecast:</h3>
            <div className="forecast">
                {forecastInfo?.map(function (item) { 
                return(
                    <>
                        <p>{item.dt_txt} :</p>
                        <p>{Math.round(item.main.temp) + " ºC"}</p>
                        <img className="weather-icon" src={"https://openweathermap.org/img/wn/"+ item.weather?.[0].icon + ".png"} alt = "weathericon"></img>
                        <p>{item.weather[0].main}</p>
                        <hr />

                    </>
                )
                
            })}
            </div>
        </div>
        </>
    )
}

export default Weather;
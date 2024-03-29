import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Weather from "../components/Weather";
import SpecificMap from "../components/SpecificMap";
import PlaceButtons from "../components/PlaceButtons";

function PlaceDetailView({id, navbar,locationInfo}) {

    const [city, setcity] = useState({});

    useEffect(function () {
        (async function () {
          const url = "/mockAPI.JSON";
    
          const response = await fetch(url);
          const result = await response.json();
    
          const foundElement = result.data.find((elem) => {
            return elem.id == id;
          });
          // console.log(foundElement);

          setcity(foundElement);

        })();
      }, []);

      function getCoordinates() {
        
        if (city.lat != undefined) {
          return (<SpecificMap city={city}/>)
        }
  
      }

      function getWeather() {
        
        if (city.lat != undefined) {
          return (<Weather cityWeather={city} />)
        }
  
      }

      function geID() {
        
        if (city.id != undefined) {
          return (<PlaceButtons cityinfo = {locationInfo} citySpecifics ={city} />)
        }
  
      }



    return(
        <>

            <div className="place-detail-background">

                {navbar}
                <Carousel sliders={city.sliders}/>
            </div>      

            <hr></hr>
          
            <h2 className="city-name"><i className="fa-solid fa-city"></i>{city.city}</h2>
        
            <div className="city-info-wrapper">
                <div className="city-info">
                    
                    <h3 className="country-name"><i className="fa-solid fa-flag"></i>{city.country}</h3>
                    <h3 className="city-date"><i className="fa-solid fa-calendar-days"></i>{city.from + " - " + city.to} </h3>
                    <p className="city-details">{city.info}</p> 
                    
                    {getCoordinates()}

                </div>

                  {getWeather()}
            
            </div>

            {geID()}
       
        </>
    )
}

export default PlaceDetailView
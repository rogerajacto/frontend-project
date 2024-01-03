import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavegationBar from "../components/NavigationBar";
import Weather from "../components/Weather";
import SpecificMap from "../components/SpecificMap";
import PlaceButtons from "../components/PlaceButtons";

function PlaceDetailView({id}) {

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
          return (<PlaceButtons cityID ={city} />)
        }
  
      }



    return(
        <>

        <div className="profile-background">
            <NavegationBar/>

            <Carousel sliders={city.sliders}/>

            <hr></hr>
            
            <h2 className="city-name"><i class="fa-solid fa-city"></i>{city.city}</h2>

            <div className="city-info-wrapper">
                <div className="city-info">
                    
                    <h3 className="country-name"><i class="fa-solid fa-flag"></i>{city.country}</h3>
                    <h3 className="city-date"><i class="fa-solid fa-calendar-days"></i>{city.from + " - " + city.to} </h3>
                    <p className="city-details">{city.info}</p> 
                    
                    {getCoordinates()}

                </div>

                  {getWeather()}
            
            </div>

            {geID()}

          <Footer/>
          
        </div>
        </>
    )
}

export default PlaceDetailView
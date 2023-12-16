import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavegationBar from "../components/NavigationBar";
import Weather from "../components/Weather";

function PlaceDetailView({locationInfo}) {
    return(
        <>
        <div className="profile-background">
            <NavegationBar/>

            <Carousel locationInfo={locationInfo}/>

            <hr></hr>
            
            <h2 className="city-name"><i class="fa-solid fa-city"></i>{locationInfo.data?.[0].city}</h2>

            <div className="city-info-wrapper">
                <div className="city-info">
                    
                    <h3 className="country-name"><i class="fa-solid fa-flag"></i>{locationInfo.data?.[0].country}</h3>
                    <h3 className="city-date"><i class="fa-solid fa-calendar-days"></i>{locationInfo.data?.[0].from + " - " + locationInfo.data?.[0].to} </h3>
                    <p className="city-details">{locationInfo.data?.[0].info}</p>      
                </div>
                <Weather locationInfo={locationInfo}/>
            </div>

        <Footer/>
        </div>
        
        </>
    )
}

export default PlaceDetailView
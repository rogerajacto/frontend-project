import Footer from "../components/Footer";
import NavegationBar from "../components/NavigationBar";

function PlaceDetailView({locationInfo}) {
    return(
        <>
        <div className="profile-background">
            <NavegationBar/>

            <div className="profile-card">

            <h3>{locationInfo.data?.[0].city}</h3>
            <p>{locationInfo.data?.[0].country}</p>
            <p>{locationInfo.data?.[0].from + " - " + locationInfo.data?.[0].to} </p>
            <p>{locationInfo.data?.[0].info}</p>

            </div>
        
        <Footer/>
        </div>
        
        </>
    )
}

export default PlaceDetailView
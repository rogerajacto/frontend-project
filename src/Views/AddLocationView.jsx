import Footer from "../components/Footer";
import NavegationBar from "../components/NavigationBar";


function AddLocationView() {
    return(
        <>
         <div className="profile-background">
            <NavegationBar/>
            <h2>Please Leave Me a Sugegestion for my next travel!</h2>
            
            <form className="add-location-card">

                <label>City</label>
                <input type="text"></input>

                <label>Country</label>
                <input type="text"></input>

                <label>From</label>
                <input type="date"></input>

                <label>To</label>
                <input type="date"></input>

                <input type="submit"></input>

            </form>

         </div>
         <Footer/>
        </>
    )
}

export default AddLocationView;
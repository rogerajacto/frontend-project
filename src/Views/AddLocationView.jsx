import Footer from "../components/Footer";
import NavegationBar from "../components/NavigationBar";






function AddLocationView() {

function AddInfo(event) {
    
    event.preventDefault();

    const fd = new FormData (userForm);

    const newPlace = {
        City: fd.get("City"),
        Country: fd.get("Country"),
        From: fd.get("From"),
        To: fd.get("To")
    }
    console.log(newPlace)
}




    return(
        <>
         <div className="profile-background">
            <NavegationBar/>

            <h2 className="form-title">Please Leave Me a Sugegestion for my next travel!</h2>

            <div className="form-container">
            
            
            <form className="add-location-card" id="userForm" onSubmit={AddInfo} > 

                <label><i class="fa-solid fa-city"></i>City</label>
                <input type="text" placeholder="Give Us A City!" name = "City"></input>

                <label><i class="fa-solid fa-flag"></i>Country</label>
                <input type="text" placeholder="Give Us A Country!" name="Country"></input>

                <div className="form-date">
                    <div>
                        <label><i class="fa-solid fa-calendar-days"></i>From</label>
                        <input type="date" name="From"></input>
                    </div>

                    <div>
                        <label><i class="fa-regular fa-calendar-days"></i>To</label>
                        <input type="date" name="To"></input>
                    </div>
                </div>

                <input type="submit" className="submit-button" ></input>

            </form>
            </div>
            <Footer/>
         </div>
         
        </>
    )
}

export default AddLocationView;
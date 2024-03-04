

function AddLocationView({navbar}) {

    
function AddInfo(event) {

    event.preventDefault();

    const fd = new FormData (userForm);

    let newPlace= {
        City: fd.get("City"),
        Country: fd.get("Country"),
        From: fd.get("From"),
        To: fd.get("To"),
        Textarea: fd.get ("textarea")
    } 
      if (newPlace.City == "" || newPlace.Country =="") {
        return(
            alert("City and Country Must be filled!")
            
      )}
      
     else(console.log(newPlace))
    
    document.querySelector(".add-location-card").reset()

}
    

    return(
        <>
         <div className="add-location-background">

            {navbar} 

            <div className="form-container">
            
            <h2 className="form-title">Please Leave Me a Suggestion for my next travel!</h2>

            <form className="add-location-card" id="userForm" onSubmit={AddInfo}> 

                <label><i className="fa-solid fa-city"></i>City</label>
                <input type="text" placeholder="Give Us A City!" name = "City"></input>

                <label><i className="fa-solid fa-flag"></i>Country</label>
                <input type="text" placeholder="Give Us A Country!" name="Country"></input>

                <div className="form-date">
                    <div>
                        <label><i className="fa-solid fa-calendar-days"></i>From</label>
                        <input type="date" name="From"></input>
                    </div>

                    <div>
                        <label><i className="fa-regular fa-calendar-days"></i>To</label>
                        <input type="date" name="To"></input>
                    </div>
                </div>

                <textarea placeholder="Why shoud I visit this place?" id="form-textarea" name="textarea"></textarea>

                <input type="submit" className="submit-button" value={"Save"}>
                
                </input>

            </form>
            </div>
            
         </div>

        </>
    )
}

export default AddLocationView;



function PlaceButtons({cityinfo, citySpecifics}) {

let nextCity = Number(citySpecifics.id) + 1;
let previousCity = Number(citySpecifics.id) - 1;


function buttonFuncionality() {

    if (citySpecifics.id == 1) {
            return(
        <>
            <div className="place-buttons-container">
                <a href={"/details/" + nextCity} >
                    <button className="place-button">Next Place <i className="fa-solid fa-arrow-right"> </i></button>
                </a>
            </div>
        </>
    )}

    else if(cityinfo.data?.length == citySpecifics.id ) {

        return(
                <>
                    <div className="place-buttons-container">
                        <a href={"/details/" + previousCity} >
                            <button className="place-button"> <i className="fa-solid fa-arrow-left"></i> Previous Place  </button>
                        </a>
                    </div>
                </>
            )
    }

    else return(
        <>
            <div className="place-buttons-container">
                <a href={"/details/" + previousCity} >
                    <button className="place-button"> <i className="fa-solid fa-arrow-left"></i> Previous Place </button>
                </a>
                <a href={"/details/" + nextCity} >
                    <button className="place-button"> Next Place <i className="fa-solid fa-arrow-right"> </i> </button>
                </a>
            </div>
        </>
    )

   
        
    }

    


    return(
        <>

        {buttonFuncionality()}

        </>
    )

}
export default PlaceButtons;
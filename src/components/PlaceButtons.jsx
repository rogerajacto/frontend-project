


function PlaceButtons({cityID}) {

let nextCity = Number(cityID.id) + 1;
let previousCity = Number(cityID.id) - 1;


function buttonFuncionality() {
    if (cityID.id == 1) {

        return(
            <>
                <div className="place-buttons-container">
                    <a href={"/details/" + nextCity} >
                        <button className="place-button">Next Place <i className="fa-solid fa-arrow-right"> </i></button>
                    </a>
                </div>
            </>
        )
    }
    else if (cityID.id >= 2 && cityID.id <= 5 ) {

        return(
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

    else return(
        <>
            <div className="place-buttons-container">
                <a href={"/details/" + previousCity} >
                    <button className="place-button"> <i className="fa-solid fa-arrow-left"></i> Previous Place  </button>
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
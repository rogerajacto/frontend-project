


function PlaceButtons({cityID}) {

let nextCity = Number(cityID.id) + 1;
let previousCity = Number(cityID.id) - 1;


function buttonFuncionality() {
    if (cityID.id == 1) {

        return(
            <>
                <div className="place-buttons-container">
                    <a href={"/details/" + nextCity} >
                        <button className="place-button">Next Place</button>
                    </a>
                </div>
            </>
        )
    }
    else if (cityID.id >= 2 && cityID.id <= 4 ) {

        return(
            <>
                <div className="place-buttons-container">
                    <a href={"/details/" + previousCity} >
                        <button className="place-button">Previous Place</button>
                    </a>
                    <a href={"/details/" + nextCity} >
                        <button className="place-button">Next Place</button>
                    </a>
                </div>
            </>
        )
    }

    else return(
        <>
            <div className="place-buttons-container">
                <a href={"/details/" + previousCity} >
                    <button className="place-button">Previous Place</button>
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
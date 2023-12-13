import { useState } from "react";
import { useEffect } from "react";

function LocationCard() {


const [locationInfo, setlocationInfo] = useState([]);

async function getInfo () {
    const path = "../public/mockAPI.JSON"

    const response = await fetch (path);
    const result = await response.json()

    setlocationInfo(result);
}

useEffect(function () {
    getInfo()
},[])


console.log(locationInfo)





    return(
        <>
            <hr/>
            <h3>Latest</h3>

            <div className="card-container">

            {locationInfo.data?.map(function (info) {
                return(
                    <>
                    <div className="card">
                        <div className="card-img-box">
                            <img src={info.mainIMG} alt="image of NYC"></img>
                        </div>
                        <div className="card-content">  

                            <h3>{info.city}</h3>
                            <p>{info.Country}</p>
                            <p>{info.from + "-" + info.to } </p>
                            <button className="card-container-button">Show More</button>
                        </div>
                    </div>
                    </>
                )
                
            })}


            </div>

        </>
    )
    
}

export default LocationCard
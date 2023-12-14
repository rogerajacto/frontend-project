import { Link } from "wouter";

function LocationCard({locationInfo}) {

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
                            <p>{info.from + " - " + info.to } </p>
                            <Link  href="/details/" className="card-container-button">Show More</Link>
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
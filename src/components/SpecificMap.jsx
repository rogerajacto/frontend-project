import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ NavigationControl} from 'react-map-gl';



function SpecificMap ({city}) {

    const SpecificMapTOKEN = "pk.eyJ1Ijoicm9nZXJhamFjdG8iLCJhIjoiY2xxbzV0azg4MWdxcDJqcDk0a3U4b2hydiJ9.Q9S_qg1z8yyPy3VQpnzmuw";

    const lat = city?.lat;
    const lon = city?.lon;

    return(
        <>
        
            <div className="specific-map">
                <Map style={{width: "100%", height:"500px"}}

                mapboxAccessToken= {SpecificMapTOKEN}

                initialViewState={{

                        latitude: lat,
                        longitude: lon,
                        zoom: 10
                    }}
                    mapStyle="mapbox://styles/rogerajacto/clqqlv09700xg01qrbhhdhsl2"
                    >
                        <NavigationControl/>

                </Map>
            </div>

        </>
    
    
)}

export default SpecificMap
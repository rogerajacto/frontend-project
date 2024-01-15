import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ NavigationControl} from 'react-map-gl';



function SpecificMap ({city}) {

    const SpecificMapTOKEN = import.meta.env.VITE_SPECIFIC_MAP_TOKEN;

    const lat = city?.lat;
    const lon = city?.lon;

    return(
        <>
        
            <div className="specific-map">
                <Map style={{width: "100%", height:"30rem"}}

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
            <div className="specific-map-responsive">
                <Map style={{width: "100%", height:"10rem"}}

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
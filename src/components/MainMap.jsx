import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ Marker, NavigationControl, Popup} from 'react-map-gl';
import { Link } from 'wouter';



function MainMap({locationInfo}) {

  const token = import.meta.env.VITE_MAIN_MAP_TOKEN;

  const [viewState, setViewState] = React.useState({
    
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 2
  });


    return(
        <>

        <div className='main-map-container'>
          <Map

            {...viewState}
            mapboxAccessToken= {token}
            onMove={function (state) {
              return (
                setViewState(state.viewState)
              )
              
            }}

        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      


      {locationInfo.data?.map(function (info) {
        return (<>

                
                <div className='location-pin'>
                  <Marker latitude={info.lat} longitude={info.lon}>

                    <a  href={"/details/" + info.id} className='marker-button'><i class="fa-solid fa-location-dot"></i></a>
                  </Marker>
                </div>
                

        </>)
      })}
        <NavigationControl position='top-right' showCompass showZoom/>

        </Map>
    </div>
        </>
    )
}


export default MainMap
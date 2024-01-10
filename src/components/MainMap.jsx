import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ Marker, NavigationControl} from 'react-map-gl';
import { Link } from 'wouter';



function MainMap({locationInfo}) {

  const token = "pk.eyJ1Ijoicm9nZXJhamFjdG8iLCJhIjoiY2xxbWJhcmJqMndhdDJtbWtqa2lwemkwMSJ9.7BEVtTmhxdgP8ZdpdpNQNw";

  const [viewState, setViewState] = React.useState({
    
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 2
  });

  function test(params) {
    
    // alert ("123")

    {<Link href='https://google.com'></Link>}
  }

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

              <a href= {"/details/" + info.id } >
                
                <div className='location-pin'>
                  <Marker onClick={test} latitude={info.lat} longitude={info.lon}></Marker>
                </div>
              </a>

        </>)
      })}
        <NavigationControl position='top-right' showCompass showZoom/>

        </Map>
    </div>
        </>
    )
}


export default MainMap
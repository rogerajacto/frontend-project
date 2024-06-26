import NavegationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import LocationCard from "./components/LocationCard";
import Footer from "./components/Footer";
import ProfileView from "./Views/ProfileView";
import { Route, Switch } from "wouter";
import AddLocationView from "./Views/AddLocationView";
import PlaceDetailView from "./Views/PlaceDetailView";
import { useState } from "react";
import { useEffect } from "react";
import MainMap from "./components/MainMap";
import PageNotFoundView from "./Views/PageNotFoundView";



function App() {

  const [locationInfo, setlocationInfo] = useState([]);

  async function getInfo () {
      const path = "/mockAPI.JSON"
  
      const response = await fetch (path);
      const result = await response.json()
  
      setlocationInfo(result);
  }
  
  useEffect(function () {
      getInfo()
  },[])

  // console.log(locationInfo)

  return (
    <>
    <Switch>

      <Route path="/">
        <div className="background">
        <NavegationBar/>
        <Hero/>
        </div>
        <LocationCard locationInfo={locationInfo}/>
        <MainMap locationInfo={locationInfo}/>
        
        
        
        
      </Route>

      <Route path="/about-me">
        <ProfileView navbar={<NavegationBar/>}/>

      </Route>

      <Route path="/add-location">
        <AddLocationView navbar={<NavegationBar/>}/>
      </Route>

      <Route path="/details/:id">
      {(params) => <PlaceDetailView id={params.id} navbar={<NavegationBar/>} locationInfo={locationInfo}/>}
      </Route>

      <Route>
        <PageNotFoundView navbar={<NavegationBar/>}/>
      </Route>

      
    </Switch>
  <Footer/>
  
    </>
  )
}

export default App

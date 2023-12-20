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

  console.log(locationInfo)

  return (
    <>
    <Switch>

      <Route path="/">
        <div className="background">
        <NavegationBar/>
        <Hero/>
        </div>
        <LocationCard locationInfo={locationInfo}/>
        <Footer/>
      </Route>

      <Route path="/about-me">
        <ProfileView/>

      </Route>

      <Route path="/add-location">
        <AddLocationView/>
      </Route>

      <Route path="/details/:id">
      {(params) => <PlaceDetailView id={params.id} />}
      </Route>

    </Switch>

  
    </>
  )
}

export default App

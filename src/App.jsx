import NavegationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import LocationCard from "./components/LocationCard";
import Footer from "./components/Footer";
import ProfileView from "./Views/ProfileView";
import { Route, Switch } from "wouter";
import AddLocationView from "./Views/AddLocationView";



function App() {


  return (
    <>
    <Switch>

      <Route path="/">
        <div className="background">
        <NavegationBar/>
        <Hero/>
        </div>
        <LocationCard/>
        <Footer/>
      </Route>

      <Route path="/about-me">
        <ProfileView/>

      </Route>
      <Route path="/add-location">
        <AddLocationView/>
      </Route>
    </Switch>

  
    </>
  )
}

export default App

import NavegationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import LocationCard from "./components/LocationCard";
import Footer from "./components/Footer";



function App() {


  return (
    <>
      <div className="background">
      <NavegationBar/>
      <Hero/>
      </div>
      <LocationCard/>
      <Footer/>
    </>
  )
}

export default App

import { Link } from "wouter";

function Hero () {
    return(
        <>
            <section className="hero-section">
               <h1 className="hero-title">I'm in love with cities I've never been to and people I've never met</h1>
               <div className="button-container">
                    <a href="/about-me">
                        <button className="section-button" >Learn More</button>
                    </a>

                    <a href="/add-location">
                        <button className="section-button">Add Location</button>
                    </a>
               </div>
            </section>

        </>
    )
    
}



export default Hero;
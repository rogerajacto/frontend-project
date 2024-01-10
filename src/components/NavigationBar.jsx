import { Link } from "wouter";



function NavegationBar() {
    return(
        <>
        <nav className="navegation-menu">
            
          

           

            <ul className="navegation-items-list">
                <li>  <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000816__travel_agency_logo_design_templates_free_travel_logo_maker-01.png" alt="logo" className="logo"></img></li>

                <li id ="name">Roger Travels</li>

                <Link href="/">
                <li className="nav-item"> 
                    
                     <div> <i className="fa-solid fa-house"></i></div>
                     Home
                </li> 
                </Link>
                
                <Link href="/add-location">
                <li className="nav-item">
                    <div><i className="fa-solid fa-map-pin"></i></div>
                     Add location
                </li>
                </Link>

  
                <Link href="/about-me">
                    
                    <li className="nav-item">
                    <div><i className="fa-solid fa-user"></i></div> 
                    About me
                </li>
                </Link>
            </ul>


            <ul className="navegation-items-responsive">
                
                <li>  <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000816__travel_agency_logo_design_templates_free_travel_logo_maker-01.png" alt="logo" className="logo"></img></li>

                <Link href="/">
                <li className="nav-item"> 
                    
                     <div> <i className="fa-solid fa-house"></i></div>
                </li> 
                </Link>
                
                <Link href="/add-location">
                <li className="nav-item">
                    <div><i className="fa-solid fa-map-pin"></i></div>
                </li>
                </Link>

  
                <Link href="/about-me">
                    <li className="nav-item">
                    <div><i className="fa-solid fa-user"></i></div> 
                </li>
                </Link>
            </ul>
        </nav>

        </>
    )
    
}

export default NavegationBar;
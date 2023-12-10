function NavegationBar() {
    return(
        <>
        <nav className="navegation-menu">
            
          

           

            <ul className="navegation-items-list">
                <li>  <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000816__travel_agency_logo_design_templates_free_travel_logo_maker-01.png" alt="logo" className="logo"></img></li>

                <li id ="name">Roger a jacto travels</li>


                <li className="nav-item"> 
                    
                     <div>   <i class="fa-solid fa-house"></i></div>
                     Home
                </li>


                <li className="nav-item">
                    <div><i className="fa-solid fa-map-pin"></i></div>
                     Add location
                </li>


                <li className="nav-item">
                    <div><i className="fa-solid fa-user"></i></div> 
                    About me
                </li>
            </ul>
        </nav>

        </>
    )
    
}

export default NavegationBar;
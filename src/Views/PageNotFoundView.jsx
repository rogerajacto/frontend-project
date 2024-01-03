import NavegationBar from "../components/NavigationBar"


function PageNotFoundView() {
    return(
        <>
            <div className="not-found-background">
                <NavegationBar/>  
            </div>
                <h1> You sure this is where you want to be??</h1>
                <h2> 404</h2>
                <h2> PAGE NOT FOUND</h2>
                <img className="not-found-img" src="https://i.pinimg.com/originals/a7/b9/ec/a7b9eca631101d2561401a61afa6e2df.gif" alt="page not found GIF"></img>
          
        </>
    )
}

export default PageNotFoundView
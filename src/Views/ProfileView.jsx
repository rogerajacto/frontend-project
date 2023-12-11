import NavegationBar from "../components/NavigationBar"
import Footer from "../components/Footer"



function ProfileView() {
    return(
        <>
        <div className="profile-background">
            <NavegationBar/>
            <div className="profile-card">

            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Profile Picture"></img>

            <div className="profile-info">
                <h2>Roger a jacto</h2>
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem qui incidunt doloribus excepturi enim asperiores, omnis, itaque tempore dicta consequatur sunt quaerat fugiat, distinctio maxime tempora rem porro laudantium totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus, voluptatem labore voluptas autem dolor cupiditate in dicta similique maiores illo porro mollitia sed nobis eos impedit debitis voluptates expedita? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus accusantium labore dignissimos neque impedit beatae, animi perferendis, ut mollitia exercitationem deserunt sequi. Esse iste, nobis enim impedit nostrum quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid nostrum placeat! Obcaecati dolorum minima accusamus, sunt magnam quo dicta nostrum suscipit beatae ipsum unde incidunt sit veritatis iure aliquam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eum omnis, optio nisi itaque voluptate porro harum ratione natus. Earum eveniet veritatis blanditiis mollitia aliquam quaerat aliquid? Minus, a cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolorum nulla perspiciatis perferendis harum nobis rem accusantium corporis, ipsam praesentium voluptatem odit quod repellat nam sit fugit velit voluptates? Enim!</p>
                
            </div>    
        
            </div>
        <Footer/>
        </div>
        </>
    )
}

export default ProfileView
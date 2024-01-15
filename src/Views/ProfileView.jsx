
function ProfileView({navbar}) {
    return(
        <>
        <div className="profile-background">
            {navbar}
            <div className="profile-card">

            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Profile Picture"></img>

            <div className="profile-info">
                <h2>Roger a jacto</h2>
                <div className="profile-info">
                    <p><strong><i class="fa-solid fa-calendar-days"></i> Age:</strong>  28 years</p>
                    <p><strong><i class="fa-regular fa-flag"></i> Nacionality:</strong> Portuguese</p>
                    <p><strong><i class="fa-regular fa-envelope"></i> Email:</strong> rogerajacto@gmail.com</p>
                    <p><strong><i class="fa-solid fa-mobile-retro"></i> Cellphone:</strong> 123123123</p>

                </div>
                <p>Welcome to my corner of the internet! I'm Roger, an avid blogger fueled by a love for travels. Here, I craft a tapestry of words to weave together stories, insights, and discoveries in the realm of traveveling. Whether I'm unraveling the complexities of travel, delving into it's nuances, or sharing my unique perspective. Every post is a journey!
                Join me as we navigate the vast landscapes of knowledge, fueled by curiosity and a thirst for understanding. It's not just about information; it's about the journey of exploration, the beauty of diverse perspectives, and the joy of connecting with fellow enthusiasts.
                As you browse through my digital sanctuary, envision yourself sipping on cold beer while diving into the immersive narratives I craft. Together, let's embark on a shared adventure where words become bridges and ideas spark conversations
                So, grab a seat, get comfortable, and let the exploration begin. Thank you for being a part of this journey with me!
                </p>
                
            </div>    
        
            </div>
        </div>
        </>
    )
}

export default ProfileView
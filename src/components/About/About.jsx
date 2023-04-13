export default function About(){
    return(
        <div>
            <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Mi perfil" width='200px'/>
            <h2>I'm Sofía...</h2>
            <p>...and this is my first App =)</p>
            <p>GitHub user: SChiabudini</p>
        </div>
    )
}
export default function About(){
    return(
        <div>
            <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Mi perfil" width='200px'/>
            <h2>Me llamo Sofía...</h2>
            <p>...y esta es mi primera App =)</p>
        </div>
    )
}
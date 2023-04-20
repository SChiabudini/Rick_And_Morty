import profileImg from './profile.jpg';

const About = () => {
    return(
        <div>
            <img src={profileImg} alt="Mi perfil" width='200px'/>
            <h2>I'm Sofía...</h2>
            <p>...and this is my first App =)</p>
            <p>GitHub user: SChiabudini</p>
        </div>
    );
}

export default About;
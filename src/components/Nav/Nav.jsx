import { NavLink, useNavigate } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ setAccess }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
        navigate('/');
    }

    return (
        <div className={style.container}>
            <div>
                <button><NavLink to="/home">Home</NavLink></button>
                <button><NavLink to="/about">About</NavLink></button>
                <button><NavLink to="/favorites">Favorites</NavLink></button>
            </div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default Nav;
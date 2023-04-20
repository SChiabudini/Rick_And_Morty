import { NavLink, useNavigate } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ setAccess }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
        navigate('/');
    }

    return (
        <div className={style.nav}>
            <div className={style.container}>
                <div className={style.menu}>
                    <NavLink className={style.link} to="/home">Home</NavLink>
                    <NavLink className={style.link} to="/about">About</NavLink>
                    <NavLink className={style.link} to="/favorites">Favorites</NavLink>
                </div>
                <div className={style.out} onClick={handleLogOut}>Log Out</div>
            </div>
        </div>
    );
}

export default Nav;
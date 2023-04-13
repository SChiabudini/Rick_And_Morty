import { NavLink, useNavigate } from "react-router-dom";

export default function Nav({setAccess}){

    const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
        navigate('/');
    }

    return (
        <div>
            <div>
                <button><NavLink to="/home">Home</NavLink></button>
                <button><NavLink to="/about">About</NavLink></button>
                <button><NavLink to="/favorites">Favorites</NavLink></button>
            </div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}
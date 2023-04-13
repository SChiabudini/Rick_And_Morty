import SearchBar from "../SearchBar/SearchBar.jsx"
import {NavLink} from "react-router-dom";

export default function Nav({onSearch}){
    return (
        <div>
            <button><NavLink to="/home">Home</NavLink></button>
            <button><NavLink to="/about">About</NavLink></button>
            <button><NavLink to="/favorites">Favorites</NavLink></button>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}
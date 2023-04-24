import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Landing from './components/Landing/Landing';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   
   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => { //es lo mismo que poner un then con response.data previamente
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => { //esto es útil para no acceder a otra ruta mientras no se hayan ingresado los datos correctos
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
         <div className='App'>
            {location.pathname !== '/' && <Nav setAccess={setAccess}/>}
            <Routes>
               <Route path='/' element={<Landing login={login}/>}/>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
               <Route path='/*' element={<Error/>}/>
            </Routes>
         </div>
   );
}

export default App;

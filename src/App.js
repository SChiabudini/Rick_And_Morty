import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '15f5c5d31f62.d053a1e13710f9b0814b';

const email = 'sofiachiabudini@gmail.com';
const password = '123456';

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => { //esto es útil para no acceder a otra ruta mientras no se hayan ingresado los datos correctos
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
            {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
            <Routes>
               <Route path='/' element={<Form login={login}/>}/>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
               <Route path='/*' element={<Error/>}/>
            </Routes>
            
         </div>
   );
}

export default App;

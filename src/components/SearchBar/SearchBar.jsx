import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState();

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const randomCharacter = () =>{
      return Math.floor(Math.random()*826+1);
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}></input>
         <button onClick={() => {onSearch(id); setId('')}}>Add Character by Id</button>
         <button onClick={() => {onSearch(randomCharacter())}}>Add Random Character</button>
      </div>
   );
}

export default SearchBar;

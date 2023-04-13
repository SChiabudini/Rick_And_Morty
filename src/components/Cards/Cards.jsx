import Card from '../Card/Card.jsx';
import SearchBar from "../SearchBar/SearchBar.jsx"

export default function Cards({characters, onClose, onSearch}) {
   return (
      <div>
         <div><SearchBar onSearch={onSearch}/></div>
         {characters.map(({id, name, status, species, gender, origin, image}) =>{
            return(
               <Card
                  key={id}/*React usa esta info de manera interna*/
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
            )
         })}
      </div>
   );
}

import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';

const Cards = ({ characters, onClose, onSearch }) => {
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
                  showOnClose={true}
               />
            )
         })}
      </div>
   );
}

export default Cards;

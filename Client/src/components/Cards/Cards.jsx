import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import style from './Cards.module.css';

const Cards = ({ characters, onClose, onSearch }) => {
   return (
      <div  classname={style.card}>
         <div><SearchBar onSearch={onSearch}/></div>
         {characters.map(({id, name, status, species, gender, origin, image}) =>{
            return(
               <div>
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
               </div>
            )
         })}
      </div>
   );
}

export default Cards;

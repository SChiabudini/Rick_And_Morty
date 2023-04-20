import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({ id, name, species, gender, image, onClose, showOnClose, addFav, removeFav, myFavorites }) => {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div>

         <div>
            <img src={image} alt={name} />
         </div>


         <div>
            <div>
               <NavLink to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </NavLink>
            </div>

            {showOnClose && (
               <div>
                  <button onClick={() => onClose(id)}>X</button>
               </div>
            )}
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

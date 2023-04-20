import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {

  const { id } = useParams();
  let [character, setCharacter] = useState({});

  useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
  }, [id]);

  return(
      <div>
          <div>
              <h1>{character?.name}</h1>
          </div>

          <div>
              <div>
                <img src={character?.image} alt={character?.name} />
              </div>

              <div>
                <h5>Status:</h5>
                <p>{character?.status}</p>
                <h5>Species:</h5>
                <p>{character?.species}</p>
                <h5>Gender:</h5>
                <p>{character?.gender}</p>
                <h5>Origin:</h5>
                <p>{character?.origin?.name}</p>
              </div>
            </div>
      </div>
  )
}

export default Detail;

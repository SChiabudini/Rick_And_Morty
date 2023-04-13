import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '15f5c5d31f62.d053a1e13710f9b0814b';

const Detail = () => {

  const { id } = useParams();
  let [character, setCharacter] = useState({});

  useEffect(() => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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

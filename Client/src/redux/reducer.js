import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

const initialState = {
    myFavorites: [],
    allCharactersFavs: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFavs: payload
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFavsCopy: payload
            };
        
        case FILTER:
        const allCharactersFiltered = state.allCharactersFavs.filter(character => character.gender === payload);
        return {
            ...state,
            myFavorites:
                payload === 'allCharacters'
                ? [...state.allCharactersFavs] 
                : allCharactersFiltered
        }

        case ORDER:
            const allCharactersFavsCopy = [...state.allCharactersFavs];
            return{
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersFavsCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavsCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}


export default reducer;
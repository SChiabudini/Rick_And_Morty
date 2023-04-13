import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload]
            }

        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(character => character.gender === payload),
                myFavorites: state.allCharacters
            }

        case ORDER:
            return{
                ...state,
                
            }

        default:
            return {...state}
    }
}


export default reducer;
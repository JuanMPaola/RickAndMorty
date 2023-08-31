import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


export default function reducer(state = initialState, { type, payload }) {
    let ordenados;
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== Number(payload))
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === payload)
            }
        case ORDER:
            if (payload === "Ascendente") {
                ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1))
            } else {
                ordenados = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1))
            }
            return {
                ...state,
                myFavorites: [...ordenados]
            }
        default:
            return { ...state }
    }
}


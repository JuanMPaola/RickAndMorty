export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

import axios from "axios";

export const addFav = (character) => {
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      try {
         const { data } = await axios.post(endpoint, character);
         if (data) {
            dispatch({
               type: ADD_FAV,
               payload: data,
            });
         }
      } catch (error) {

      }
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id; // Agrega una barra diagonal antes del ID
   try {
      return async (dispatch) => { // Quita el try/catch de afuera
         const { data } = await axios.delete(endpoint);
         if (data) {
            dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
         };
      }
   } catch (error) {

   }
};


export function filterCards(gender) {
   return {
      type: FILTER,
      payload: gender
   }
}

export function orderCards(order) {
   return {
      type: ORDER,
      payload: order
   }

}

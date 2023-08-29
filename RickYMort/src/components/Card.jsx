import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux'
import { useState, useEffect } from "react";




export function Card({ character, onClose, myFavorites, addFav, removeFav }) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(character) {
      if (isFav === true) {
         setIsFav(false)
         removeFav(character.id)
      }else{
         setIsFav(true)
         addFav(character, onClose)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className="card">
         {
            <button onClick={()=>handleFavorite(character)}>{isFav ? '❤️' : '🤍'}</button>
         }
         
         <button onClick={onClose} >X</button>
         <br />

         <img src={character.image} alt='' />
         <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
         </Link>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
      </div>
   );
}

function mapStateToProps(state){
   return {myFavorites: state.myFavorites}
}

function mapDispatchToProps(dispatch) {
   return ({
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   })
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)


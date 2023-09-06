import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import style from './Card.module.css'



export function Card({ character, onClose, myFavorites, addFav, removeFav }) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(character) {
      if (isFav === true) {
         setIsFav(false)
         removeFav(character.id)
      } else {
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
      <div className={style.conteiner}>
         <div className={style.buttons}>
            <p>{character.id}</p>

            {<button className={style.heart} onClick={() => handleFavorite(character)}>{isFav ? '❤️' : '🤍'}</button>}

            <button className={style.close} onClick={onClose} >X</button>
         </div>


         <img src={character.image} alt='' />
         <Link to={`/detail/${character.id}`} style={{textDecoration:"none"}}>
            <h3 className={style.nombre}>{character.name}</h3>
         </Link>
         <div className={style.cardInfo}>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
         </div>

      </div>
   );
}

function mapStateToProps(state) {
   return { myFavorites: state.myFavorites }
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


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
         <div className={style.divButtons}>
            <p>{character.id}</p>

            {<button className={style.heart} onClick={() => handleFavorite(character)}>{isFav ? '❤️' : '🤍'}</button>}

            <button onClick={onClose} ><h5>❌</h5></button>
         </div>

         <img src={character.image} alt={character.name} />

         <h3>{character.name}</h3>

         <div className={style.infoContainer}>

            <div className={style.infoRow}>
               <p >Species: </p>
               <h4>{character.species}</h4>
            </div>

            <div className={style.infoRow}>
               <p >Gender: </p>
               <h4 style={{color: "aqua"}}>{character.gender}</h4>
            </div>
         </div>
         <Link to={`/detail/${character.id}`} style={{ textDecoration: "none" }}>
            <button className={style.detail} >Detail</button>
         </Link>

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


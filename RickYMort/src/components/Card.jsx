import { Link } from "react-router-dom";

export default function Card({ character, onClose }) {
   return (
      <div className="card">
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

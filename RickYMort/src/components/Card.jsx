export default function Card({character}) {
   return (
      <div className="card">
         <button  onClick={character.onClose} >X</button>
         <br/>

         <img src={character.image} alt=''/>

         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>

        
         
      </div>
   );
}

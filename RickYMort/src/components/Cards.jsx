import Card from './Card';


export default function Cards({characters}) {

   return <div className="cartas"> {characters.map(character=>
   <Card key={character.id} character={character}/>
   )}
   </div>;
}
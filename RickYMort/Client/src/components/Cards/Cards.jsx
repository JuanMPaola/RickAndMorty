import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {

   return (<div className={style.conteiner}> 
   {characters.map(character=>
   <Card key={character.id} character={character} onClose={()=>onClose(character.id)}/>
   )}
   </div>);
}
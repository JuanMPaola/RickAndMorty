import { useState } from "react";



export default function SearchBar({onSearch, location, randomHandler}) {

   const [id, setId] = useState("");

   function handleChange(event){
      setId(event.target.value);
   }
   console.log(location)
   return (


      <div>
         <input 
         value={id} 
         type='search' 
         onChange={handleChange}
         placeholder="ID... del 1 al 826"/>
         {location.pathname === '/home' && <button onClick={()=>onSearch(id)}>Agregar</button>}
         {location.pathname === '/home' && <button onClick={()=>randomHandler()}>Add Random</button>} 
         
      </div>
   );
}

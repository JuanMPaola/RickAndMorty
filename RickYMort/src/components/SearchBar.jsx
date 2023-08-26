import { useState } from "react";



export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function handleChange(event){
      setId(event.target.value);
   }

   return (


      <div>
         <input 
         value={id} 
         type='search' 
         onChange={handleChange}
         placeholder="ID... del 1 al 826"/>
         <button onClick={()=>onSearch(id)}
         >Agregar</button>
      </div>
   );
}

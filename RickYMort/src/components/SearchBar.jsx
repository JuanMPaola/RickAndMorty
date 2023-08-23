import { useState } from "react";



export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function handleChange(event){
      setId(event.target.value);
   }

   return (


      <div>
         <input value={id} type='search' onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

import { useState } from "react";
import style from "./Search.module.css"


export default function SearchBar({ onSearch, location, randomHandler }) {

   const [id, setId] = useState("");

   function handleChange(event) {
      setId(event.target.value);
   }
   console.log(location)
   return (


      <div className={style.conteiner}>
         <input
            value={id}
            type='search'
            onChange={handleChange}
            placeholder=" ID... 1 to 826" />
         <div>
            {location.pathname === '/home' && <button onClick={() => onSearch(id)}>Add</button>}
            {location.pathname === '/home' && <button onClick={() => randomHandler()}>Random</button>}
         </div>

      </div>
   );
}

import axios from "axios";
import { useParams, } from "react-router-dom";
import { useState, useEffect } from "react";


function detail() {

    const [character, setCharacter] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, []);




    return (
        <div>
            {character.name ? (
            <> 
            <img src={character.image} alt='' />
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <h2>{character.location?.name}</h2>
            </>
            ) : (
                <h3>Loading...</h3>

            )}
        </div>
    )
}
export default detail;
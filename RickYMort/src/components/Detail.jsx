import axios from "axios";
import { useParams, } from "react-router-dom";
import { useState, useEffect } from "react";


function detail() {

    const [character, setCharacter] = useState({});

    let param = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${param.detail}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);




    return (
        <div>
            <h1 className="detail">DETAIL</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
        </div>
    )
}
export default detail;
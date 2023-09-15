import axios from "axios";
import { useParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

function detail() {

    const [character, setCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, []);

    return (
        <div className={style.conteiner}>
            {character.name ? (
                <>

                    <img src={character.image} alt='' />


                    <div>
                        <h1>{character.origin?.name}</h1>
                        <p>Status:</p> <h2>{character.status}</h2>
                        <p>Species:</p><h2> {character.species}</h2>
                        <p>Gemder: </p><h2>{character.gender}</h2>
                        <p>Location:</p><h2> {character.location?.name}</h2>
                    </div>


                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )
}
export default detail;
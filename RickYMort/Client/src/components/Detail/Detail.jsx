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
                    <div>
                        <img className={style.imagen} src={character.image} alt='' />
                    </div>

                    <div className={style.nombre}>

                    </div>

                    <div className={style.info}>
                        <h1>{character.origin?.name}</h1>
                        <h2>Status: {character.status}</h2>
                        <h2>Species: {character.species}</h2>
                        <h2>Gemder: {character.gender}</h2>
                        <h2>Location: {character.location?.name}</h2>
                    </div>


                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )
}
export default detail;
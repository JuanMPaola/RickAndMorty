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
            <div className={style.center}>
                <div className={style.imageContainer}>
                    <img src={character.image} alt={character.name} />
                </div>



                <div className={style.infoContainer}>
                    <div className={style.nombre}>
                        <h1>{character.name}</h1>
                    </div>

                    <div className={style.infoRow}>
                        <p>Status:</p>

                        <h4 style={{ color: character.status === "Dead" ? "red" : character.status === "Alive" ? "green" : "white" }}>{character.status}</h4>
                    </div>

                    <div className={style.infoRow}>
                        <p>Species:</p>
                        <h4 style={{ color: "rgb(220, 43, 226)" }}>{character.species}</h4>
                    </div>

                    <div className={style.infoRow}>
                        <p>Gender:</p>
                        <h4 style={{ color: "aqua" }}>{character.gender}</h4>
                    </div>

                    <div className={style.infoRow}>
                        <p>Location:</p>
                        <h4>{character.location?.name}</h4>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default detail;
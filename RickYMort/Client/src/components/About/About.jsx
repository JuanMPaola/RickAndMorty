import Nav from "../Nav/Nav";
import { useLocation } from "react-router-dom";
import style from "./About.module.css"

function about() {
    console.log(useLocation())
    return (
        <>
            <div className={style.conteiner}>
                <img src="../src/assets/RyMLogo.png" alt="My Logo" />
                <p>
                    Hello and thank you for visiting my portfolio website!
                </p>
                <br />
                <p>
                    This is an ambitious project I developed during Henry's bootcamp, showcasing the seamless synergy of React on the frontend and Express on the backend.
                </p>
                <br />
                <p>
                    Created by: JuanMPaola
                </p>
                <br />
                <p>
                    My links !
                </p>
                <div className={style.buttons}>

                    <a href="https://github.com/JuanMPaola" target="_blank">
                        <img
                            src="../src/assets/Iconos/icons8-github-64.png"
                            alt="GitHub" />
                    </a>
                    {/* <a >
                        <img
                            src="../src/assets/Iconos/icons8-gmail-48.png"
                            alt="LinkedIn" />
                    </a> */}
                    <a href="https://www.linkedin.com/in/juan-manuel-paola-238154216/" target="_blank">
                        <img
                            src="../src/assets/Iconos/icons8-linkedin-48.png"
                            alt="Mail" />
                    </a>

                </div>
            </div>

        </>
    )
}

export default about;
import Nav from "../Nav/Nav";
import { useLocation } from "react-router-dom";
import style from "./About.module.css"

function about() {
    console.log(useLocation())
    return (
        <>
            <div className={style.conteiner}>
                <h1 className="abouth1"></h1>
                <img src="" alt="" />
                <p> This is an integral proyect made it in Henry's bootcamps, using React in the front end and Express in the back end.
                    Created by: JuanMPaola
                    My links !

                </p>
                <div className={style.buttons}>

                    <a href="https://github.com/JuanMPaola">
                        <img
                            src="../src/assets/Iconos/icons8-github-64.png" 
                            alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-manuel-paola-238154216/">
                        <img 
                        src="../src/assets/Iconos/icons8-gmail-48.png" 
                        alt="LinkedIn" />
                    </a>
                    <a href="">
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
import Nav from "../Nav/Nav";
import { useLocation } from "react-router-dom";

function about (){
    console.log(useLocation())
    return(
     <>
        <h1 className="abouth1">ABOUT PAGE</h1>
     </>
    )
}

export default about;
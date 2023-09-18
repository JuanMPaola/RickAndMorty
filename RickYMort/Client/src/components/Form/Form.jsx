import { useState,useEffect } from "react";
//import validation from "../../validation";

//onChange={handleChange()}
function form({ login }) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...data,
                [event.target.name]: event.target.value
            })
        )
    }

    function diseableHandler() {
        let disable;
        for (let error in errors) {
            if (errors[error] === "") disable = false;
            else {
                disable = true
                break;
            }
        }
        return disable;
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$/;

    function validation(data) {
        let errors = {}
        if (!data.email) {
            errors.email = 'Ingresa un mail'
        }

        if (!regex.test(data.email)) {
            errors.email = 'El email es invalido'
        }

        if (data.email.length > 35) {
            errors.email = 'El email debe contener menos de 35 caracteres'
        }

        if (data.password.length < 6 && data.password.length > 10) {
            errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
        }

        //if()

        return errors;
    }

    function handleSumbit(e) {
        e.preventDefault()
        login(data)
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url("https://images.squarespace-cdn.com/content/v1/51548a58e4b0cf906c653f22/1554172376096-TR4JO5FMMHRPCDWHTB11/Comp_1.gif?format=1500w")`;

        return () => {
            document.body.style.backgroundImage = null
        }
    }, []);

    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <input type="text" name="email"
                        value={data.email} onChange={handleChange} required=""
                        placeholder="ejemplo@gmail.com" />
                    <label>Username</label>
                    {errors.email ? <p className="formerror">{errors.email}</p> : null}
                </div>
                <div className="user-box">
                    <input type="password" name="password"
                        value={data.password} onChange={handleChange}
                        placeholder="qweqwe123" />
                    <label>Password</label>
                    {errors.password ? <p className="formerror">{errors.password}</p> : null}
                </div><center>

                    <a href="#" type="submit" value="Log in"
                        onClick={handleSumbit} disabled={diseableHandler()}>
                        SEND
                        <span></span>
                    </a></center>
            </form>
        </div>
    )
}

export default form;
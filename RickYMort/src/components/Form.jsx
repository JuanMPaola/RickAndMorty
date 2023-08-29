import { useState } from "react";
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

    const Trex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$/;

    function validation(data) {
        let errors = {}
        if (!data.email) {
            errors.email = 'Ingresa un mail'
        }

        if (!Trex.test(data.email)) {
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

    return (
        <div class="login-box">
            <form>
                <div class="user-box">
                    <input type="text" name="email"
                        value={data.email} onChange={handleChange} required="" />
                    <label>Username</label>
                    {errors.email ? <p className="formerror">{errors.email}</p> : null}
                </div>
                <div class="user-box">
                    <input type="password" name="password"
                        value={data.password} onChange={handleChange} />
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
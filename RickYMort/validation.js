import Form from "./src/components/Form"

function validation(setErrors) {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)  
    || !data.email || data.email.length > 35){
        setErrors.setErrors({
            ...errors,
            email: 'email invalido'
        })
    }

    if(data.password.length < 6 && data.password.length > 10){


    }
}

export default validation
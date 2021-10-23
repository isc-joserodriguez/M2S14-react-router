import React from 'react'
import { signin } from '../../services/usuario'
const Signin = () => {
    const onSubmited = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        signin(dataObject);
        e.target.reset();
    };
    return (
        <fieldset>
            <legend>Signin</legend>
            <form onSubmit={onSubmited}>
                <label>email: </label><br />
                <input type='text' name='email' /><br /><br />
                <label>Password: </label><br />
                <input type='text' name='password' /><br /><br />
                <input type='submit' value='Enviar' />
            </form>
        </fieldset>
    )
}

export default Signin

import React from 'react'
import { signup } from '../../services/usuario'

const Signup = () => {
    const onSubmited = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        signup(dataObject);
        e.target.reset();
    };
    return (
        <fieldset>
            <legend>Signup</legend>
            <form onSubmit={onSubmited}>
                <label>Firstname: </label><br />
                <input type='text' name='firstName' /><br /><br />
                <label>Lastname: </label><br />
                <input type='text' name='lastName' /><br /><br />
                <label>email: </label><br />
                <input type='text' name='email' /><br /><br />
                <label>Password: </label><br />
                <input type='text' name='password' /><br /><br />
                <input type='submit' value='Enviar' />
            </form>
        </fieldset>
    )
}

export default Signup

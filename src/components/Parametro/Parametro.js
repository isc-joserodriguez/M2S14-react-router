import React from 'react'
import { useParams } from 'react-router-dom'

const Parametro = ({ nombre = 'Pablo' }) => {
    /* useParams() = {mensaje: 'hola-desde-la-ruta'} */

    //let variable = useParams().mensaje
    let { mensaje: mensajeRuta, otroParam = 'No existe' } = useParams()
    console.log(otroParam)
    console.log(mensajeRuta)
    console.log(nombre)
    return (
        <div>
            {mensajeRuta}
        </div>
    )
}

export default Parametro

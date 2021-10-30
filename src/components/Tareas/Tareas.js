import React, { useState, useEffect } from 'react'
import { getTareas } from '../../services/tareas'

const Tareas = () => {
    const [listaTareas, setListaTareas] = useState([])

    const getTareasNew = async () => {
        const respuesta = await getTareas();
        setListaTareas(respuesta)
    }

    useEffect(() => {
        getTareasNew();
        console.log('montaje')
    }, [])

    return (
        <ul>
            {listaTareas.map((tarea, i) => (
                <li key={i}>{tarea.title} {tarea.description}</li>
            ))}
        </ul>
    )
}

export default Tareas

import React, { useState } from 'react'
import { getTareas } from '../../services/tareas'

const Tareas = () => {
    const [listaTareas, setListaTareas] = useState([])

    getTareas(setListaTareas);

    return (
        <ul>
            {listaTareas.map((tarea, i) => (
                <li key={i}>{tarea.title} {tarea.description}</li>
            ))}
        </ul>
    )
}

export default Tareas

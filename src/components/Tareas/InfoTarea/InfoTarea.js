import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTarea } from '../../../services/tareas';

const InfoTarea = () => {
    const { id } = useParams();
    return (
        <div>
            {id}
            <br />
            <br />
            <br />
            <Link to='/tareas'>Volver</Link>
        </div>
    )
}

export default InfoTarea

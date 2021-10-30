import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTarea } from '../../../services/tareas';

const InfoTarea = () => {
    const { id } = useParams();
    const [dataTarea, setDataTarea] = useState({
        title: '',
        description: ''
    })

    const getTareasNew = async () => {
        const respuesta = await getTarea(id);
        setDataTarea(respuesta)
    }

    useEffect(() => {
        getTareasNew();
    }, [])


    return (
        <div>
            {id}
            <br />
            {dataTarea.title}
            <br />
            {dataTarea.description}
            <br />
            <br />
            <br />
            <br />
            <Link to='/tareas'>Volver</Link>
        </div>
    )
}

export default InfoTarea

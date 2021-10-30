import React, { useState, useEffect } from 'react'
import { getTareas } from '../../services/tareas'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

const Tareas = ({ contador = 0 }) => {
    const history = useHistory();
    const [listaTareas, setListaTareas] = useState([])
    const [nombre, setNombre] = useState('pikachu');
    const [dataPokemon, setDataPokemon] = useState({
        name: 'NA',
        order: 'NA'
    });

    const getTareasNew = async () => {
        const respuesta = await getTareas();
        setListaTareas(respuesta)
    }

    useEffect(() => {
        getTareasNew();
        console.log('montaje')
    }, [contador])

    useEffect(() => {
        let timeout = setTimeout(() => {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + nombre).then(resp => {
                setDataPokemon({
                    name: resp.data.name,
                    order: resp.data.order
                })
            }).catch(err => {
                console.log(err)
            })
        }, 1000);

    }, [nombre])

    return (
        <div className='hola'>
            <React.Fragment>
                <ul style={{
                    backgroundColor: 'red',
                    fontSize: '50px'
                }}>
                    {listaTareas.map((tarea, i) => (
                        <li key={i}>
                            {tarea.title} {tarea.description}
                            <Link to={'/tareas/' + tarea._id}>Ver info</Link>
                            <button onClick={() => { history.push('/tareas/' + tarea._id) }}>Ver</button>
                        </li>
                    ))}
                </ul>

                <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br /><br />
                {dataPokemon.name}<br />
                {dataPokemon.order}<br />
            </React.Fragment>
        </div>
    )
}

export default Tareas

import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'

const List = ({ peliculas, setEdit, updateId, setFormData }) => {
    const handleClick = (values) => {
        updateId(values.id)
        setFormData({
            director: values.director,
            genero: values.genero,
            nombre: values.nombre,
            imagen: values.imagen,
        });
        setEdit();
    }

    return (
        <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <h1>Lista</h1>
            <br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Director</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map(pelicula => (
                        <tr key={pelicula.id}>
                            <td>{pelicula.nombre}</td>
                            <td>{pelicula.genero}</td>
                            <td>{pelicula.director}</td>
                            <td>
                                {
                                    pelicula.imagen ?
                                        <img width={100} src={pelicula.imagen} /> :
                                        'No hay imagen'
                                }
                            </td>
                            <td>
                                <Button variant="warning" onClick={() => handleClick(pelicula)}>Editar</Button> {/* Creamos una función que ejecuta handleClick */}
                                <Button variant="danger">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    )
}

export default List

import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'

const List = ({ peliculas }) => {
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
                                <Button variant="warning">Editar</Button>
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

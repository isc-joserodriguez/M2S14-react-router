import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const FormPelicula = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const onChange = (e) => {
        console.log('on change...')
    }

    return (
        <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name='nombre' onChange={onChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Género</Form.Label>
                        <Form.Control type="text" placeholder="Género" name='genero' onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Director</Form.Label>
                        <Form.Control type="text" placeholder="Director" name='director' onChange={onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default FormPelicula

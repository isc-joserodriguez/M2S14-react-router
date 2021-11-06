import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const FormPelicula = ({
    formData,
    setFormData,
    onSave
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onSave(formData)
        setFormData({
            nombre: '',
            genero: '',
            director: ''
        })
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name='nombre' value={formData.nombre} onChange={onChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Género</Form.Label>
                        <Form.Control type="text" placeholder="Género" name='genero' value={formData.genero} onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Director</Form.Label>
                        <Form.Control type="text" placeholder="Director" name='director' value={formData.director} onChange={onChange} />
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

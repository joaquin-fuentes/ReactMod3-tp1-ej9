import React from 'react';
import { Card, Button, Form, Col, Row } from "react-bootstrap"

const Cita = () => {
    return (
        <Card className='my-2 mx-0 sombra'>
            <Card.Header className='d-flex'>
                <div className='d-flex align-items-center justify-content-center p-3'>
                    <div className='bg-verde rounded-circle circulo'>

                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <h5>Mascota:firulais</h5>
                    <h5>Dueño: Pepe</h5>
                </div>
            </Card.Header>
            <Card.Body className='bg-verde'>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Fecha:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="date" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Hora:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="time" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Sintomas:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
            </Card.Body>
            <Card.Footer className='text-end'>
                <Button variant="danger">Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Cita;
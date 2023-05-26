import React from 'react';
import { Card, Button, Form, Col, Row } from "react-bootstrap"

const Cita = ({cita,borrarCita}) => {
    return (
        <Card className='my-2 mx-0 sombra'>
            <Card.Header className='d-flex'>
                <div className='d-flex align-items-center justify-content-center p-3'>
                    <div className='bg-verde rounded-circle circulo'>

                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <h5>Mascota: {cita.mascota}</h5>
                    <h5>Dueño: {cita.duenio}</h5>
                </div>
            </Card.Header>
            <Card.Body className='bg-verde'>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Fecha: 
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="date" disabled value={cita.fecha} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Hora: 
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="time" disabled value={cita.hora} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="p-3">
                    <Form.Label column sm="3">
                        Sintomas: 
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" disabled value={cita.sintomas} />
                    </Col>
                </Form.Group>
            </Card.Body>
            <Card.Footer className='text-end'>
                <Button variant="danger" onClick={()=>borrarCita(cita.duenio)}>Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Cita;
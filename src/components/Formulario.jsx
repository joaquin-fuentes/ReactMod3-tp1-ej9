import React from 'react';
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useState } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [documento, setDocumento] = useState("")
    const [dato, setDato] = useState({})
    const [datosUsuario, setDatosUsuario] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length !== 0 && apellido.length !== 0 && email.length !== 0 && documento.length !== 0) {
            setDato({ nombre: nombre, apellido: apellido, email: email, documento: documento })
            setDatosUsuario([...datosUsuario, dato]);
            setNombre("");
            setApellido("");
            setEmail("");
            setDocumento("");
            alert("Datos cargados")
        } else {
            alert("no fue posible cargar los datos, por favor complete todos los campos")
        }
    };


    return (
        <section className='border sombra fw-bold'>
            <Form onSubmit={handleSubmit} >
                <header className='border p-3  '>
                    <h4> Llenar el formulario para crear una cita</h4>
                </header>
                <Row className="bg-celeste m-0 p-2 p-md-0">
                    <Form.Group as={Row} className="p-3">
                        <Form.Label column sm="2">
                            Nombre de mascota:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Ingrese el nombre de su mascota" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="p-3">
                        <Form.Label column sm="2">
                            Nombre de dueño:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Ingrese el nombre del dueño" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='px-0'>
                        <Col sm="6">
                            <Form.Group as={Row} className="p-3">
                                <Form.Label column sm="4">
                                    Fecha:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="date" placeholder="dd/mm/yyyy" />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group as={Row} className="p-3 ">
                                <Form.Label column sm="2">
                                    Hora:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="time" placeholder="dd/mm/yyyy" />
                                </Col>
                            </Form.Group>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="p-3">
                        <Form.Label column sm="2">
                            Sintomas:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Describir los sintomas de la mascota" />
                        </Col>
                    </Form.Group>

                </Row>
                <footer className='border p-3 text-center '>
                    <Button type="submit" className='sombra'>Enviar Formulario</Button>
                </footer>
            </Form>
        </section>
    );
};

export default Formulario;
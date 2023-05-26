import React from 'react';
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import Citas from "./Citas"
import NoCita from "./NoCita"

const Formulario = () => {

    const [mascota, setMascota] = useState("")
    const [duenio, setDuenio] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")
    let citasLocalStorage = JSON.parse(localStorage.getItem("listaCitas") || "[]")
    const [citas, setCitas] = useState(citasLocalStorage)



    useEffect(() => {
        localStorage.setItem("listaCitas", JSON.stringify(citas))
    }, [citas])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mascota.length !== 0 && duenio.length !== 0 && fecha.length !== 0 && hora.length !== 0 && sintomas.length !== 0) {
            const nuevaCita = { mascota: mascota, duenio: duenio, fecha: fecha, hora: hora, sintomas: sintomas }
            setCitas([...citas, nuevaCita]);
            setMascota("");
            setDuenio("");
            setFecha("");
            setHora("");
            setSintomas("");
            console.log("dato guardado:", (nuevaCita));
            alert("Nueva cita creada")
        } else {
            alert("no fue posible crear la cita, por favor complete todos los campos")
        }
    };
    const borrarCita = (duenio) => {
        let arregloFiltrado = citas.filter((cita) => cita.duenio !== duenio)
        setCitas(arregloFiltrado)
    }


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
                            <Form.Control type="text" placeholder="Ingrese el nombre de su mascota"
                                onChange={(e) => setMascota(e.target.value)}
                                value={mascota}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="p-3">
                        <Form.Label column sm="2">
                            Nombre de dueño:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Ingrese el nombre del dueño"
                                onChange={(e) => setDuenio(e.target.value)}
                                value={duenio}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='px-0'>
                        <Col sm="6">
                            <Form.Group as={Row} className="p-3">
                                <Form.Label column sm="4">
                                    Fecha:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="date" placeholder="dd/mm/yyyy"
                                        onChange={(e) => setFecha(e.target.value)}
                                        value={fecha}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group as={Row} className="p-3 ">
                                <Form.Label column sm="2">
                                    Hora:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="time" placeholder=""
                                        onChange={(e) => setHora(e.target.value)}
                                        value={hora}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="p-3">
                        <Form.Label column sm="2">
                            Sintomas:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Describir los sintomas de la mascota"
                                onChange={(e) => setSintomas(e.target.value)}
                                value={sintomas}
                            />
                        </Col>
                    </Form.Group>

                </Row>
                <footer className='border p-3 text-center '>
                    <Button type="submit" className='sombra'>Enviar Formulario</Button>
                </footer>
            </Form>
            {citas.length > 0 ? (
                <Citas citas={citas} borrarCita={borrarCita}></Citas>
            ) : (
                <NoCita></NoCita>
            )}

        </section>
    );
};

export default Formulario;
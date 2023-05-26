import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cita from './Cita';

const Citas = ({ citas, borrarCita }) => {
    return (
        <section className='mx-0'>
            <header className='text-center p-3 border my-3'>
                <h4>Administra las citas aqui</h4>
            </header>
            <Container>
                <Row className='d-flex justify-content-center'>
                    {citas.map((cita, indice)=>{
                        return  <Col key={indice} sm={6}>
                                    <Cita borrarCita={borrarCita}  cita={cita}></Cita>
                                </Col>
                    })}
                   
                </Row>
            </Container>
        </section>
    );
};

export default Citas;
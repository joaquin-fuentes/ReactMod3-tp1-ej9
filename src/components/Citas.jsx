import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cita from './Cita';

const Citas = () => {
    return (
        <section className='mx-0'>
            <header className='text-center p-3 border my-3'>
                <h4>Administra las citas aqui</h4>
            </header>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={6}>
                        <Cita></Cita>
                    </Col>
                    <Col sm={6}>
                        <Cita></Cita>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Citas;
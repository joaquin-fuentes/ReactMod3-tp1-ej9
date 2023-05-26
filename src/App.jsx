import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './components/Footer';
import { Container } from "react-bootstrap"
import Header from './components/Header';
import Formulario from './components/Formulario';


const App = () => {
  return (
    <>
     <Header></Header>
      <Container className='mainPage my-3'>
        <Formulario></Formulario>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;
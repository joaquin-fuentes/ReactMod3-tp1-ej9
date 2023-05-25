import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './components/Footer';
import { Container } from "react-bootstrap"
import Header from './components/Header';
import Formulario from './components/Formulario';
import NoCita from './components/NoCita';
import Citas from "./components/Citas"

const App = () => {
  return (
    <>
     <Header></Header>
      <Container className='mainPage my-3'>
        <Formulario></Formulario>
        {/* <NoCita></NoCita> */}
          <Citas></Citas>  
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;
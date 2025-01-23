import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Imagem01 from '../img/logo.kkk.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Topo = () => {
    return (
        <>
        <Navbar expand="lg" className="corT">
            <Container>
            <Navbar.Brand href="#home"><img src={Imagem01} rounded className='w-1' /></Navbar.Brand>
                <Navbar.Brand href="#home">PROJETO SAMURAI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>HOME</Nav.Link>
                        <Nav.Link href='/karate'>KARATE</Nav.Link>
                        <Nav.Link href='/KungFu'>KUNG FU</Nav.Link>
                        <Nav.Link href='/Taekwondo'>TAEKWONDO</Nav.Link>
                        <Nav.Link href='/Login' className='text-right'>LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>  
    )
}

export default Topo;
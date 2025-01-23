import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Topo = () => {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">TOPO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/sobre'>Sobre</Nav.Link>
                        <Link to='/'>HOME</Link>
                        <Link to='/sobre'>SOBRE</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>  
    )
}

export default Topo;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Rodape = () =>{
    return(
        <div className="corola Container">
            <div className="Container-md corola">
                <Row className="corola">
                    <Col>
                        <h1 className="text-center fiat">CONTATOS</h1>
                        <p className="text-center gol">TELEFONE: +5511932203179</p>
                    </Col>
                    <Col>
                        <h1 className="text-center fiat">OUTROS TRABALHOS</h1>
                        <p className="text-center gol">PROJETO BONSAI</p>
                    </Col>
                    <Col>
                        <h1 className="text-center fiat">REDES SOCIAIS</h1>
                        <p className="text-center gol">INSTAGRAM: @Victor_lim_a</p>
                        <p className="text-center gol">GITHUB: Ve3e3</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Rodape;
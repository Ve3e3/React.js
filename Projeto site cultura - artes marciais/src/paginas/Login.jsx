import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
    return (
    <>
        <div className="Container puma2">
                <Row>
                    <Col>
                    <h1 className="text-center puma" mt-5>LOGIN</h1>
                    <p className="text-center">
                        <form>
                        <label> Entre com o email ou nome de usuário:
                            <br></br>
                            <input type="text" />
                        </label>
                        <br></br>
                        <label> Senha:
                        <br></br>
                            <input type="text" />
                            <br></br>
                        </label>
                        <br></br>
                        <button onClick={'1'}>OK</button>
                        </form>
                    </p>
                    </Col>
                </Row>
        </div>
    </>
    )
}
export default Login;
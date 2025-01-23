import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imagem02 from '../img/karate2.jpg';
import Imagem03 from '../img/karate.jpg'
import Imagem04 from '../img/KG3.jpg';
import Imagem05 from '../img/TK2.jpg';

const Home = () => {
    return (
        <>
      
        <div className="Container maverick">
            <div className="Container-md">
               <Row>
                    <Col className="fusca">
                        <hr />
                        <h3 className="text-center corW">A MENTE, O CORPO E A ALMA, ANDAM JUNTAS QUANDO EM HARMONIA COM O ESPIRITO GUERREIRO!!!</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="brasilia">
                        <h1> <img src={Imagem03} className="img00" /></h1>
                    </Col>
                </Row>
                
                <Row>
                    <Col className="Hofstetter">
                        <h1 className="text-center">SOBRE OQUE FALAMOS</h1>
                        <hr />
                        <p>Bem-vindo ao nosso portal dedicado ao mundo das artes marciais!
                                <br /> 
                            Aqui, exploramos a rica história, as diversas tradições e as técnicas intrigantes por trás de uma ampla gama de disciplinas de combate de todo o mundo. Desde as antigas formas de luta até as modernas competições, nosso objetivo é proporcionar uma visão abrangente e inspiradora sobre as artes marciais, destacando seus benefícios físicos, mentais e espirituais. Junte-se a nós nesta jornada emocionante enquanto mergulhamos nas profundezas da sabedoria e da arte das artes marciais.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="palio text-center">
                        <Col className="uno">
                        <h1>KUNG-FU</h1>
                            <hr />
                            <p>O kung fu é milenar, sendo considerada uma da artes marciais mais antigas do mundo. Existem muitas lendas sobre a verdadeira origem da luta, a mais conhecida narra a história de um monge chinês chamado Ta Mo, que subiu em uma montanha para observar o movimento dos animais, as posições em que lutavam e como se defendiam.</p>
                        </Col>
                    </Col>
                    <Col className="palio">
                        <Col className="uno2"><img src={Imagem04} className="img00 pt-2" />
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col className="palio text-center">
                        <Col className="uno2"><img src={Imagem02} className="img00 pt-2" /></Col>
                    </Col>
                    <Col className="palio text-center">
                        <Col className="uno">
                            <h1>KARATÊ</h1>
                            <hr />
                            <p>karate, é uma antiga arte marcial japonesa que desenvolve técnicas de socos, chutes e outros tipos de golpe. A palavra "karate" traduz-se como "mãos vazias", indicando sua natureza de técnica de combate sem o uso de armas. Hoje, vai além da autodefesa, tornando-se um esporte praticado em competições olímpicas, divididas entre as modalidades de kata e kumite.
                                <br /> Veja mais sobre Karatê!</p>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col className="palio text-center">
                        <Col className="uno">
                        <h1>TAEKWONDO</h1>
                            <hr />
                            <p>Taekwondo é uma arte marcial coreana que enfatiza técnicas de chutes e socos, além de promover disciplina mental e física. É praticado como esporte competitivo e também como forma de defesa pessoal.</p>
                        </Col>
                    </Col>
                    <Col className="palio text-center">
                        <Col className="uno2"><img src={Imagem05} className="img00 pt-2" /></Col>
                    </Col>
                </Row>
                <Row>
                    <Col className="fusca">
                        <hr />
                        <h3 className="text-center corW">AGORA ENCONTRE O SEU INSTINTO INTERIOR E BORAAAAAA!!!</h3>
                        <p className="corW">clique em algum link no TOPO e aproveite</p>
                        <hr />
                    </Col>
                </Row>
            </div>
        </div>
       <div>
        
       </div>
        </>
    )
}
export default Home;
import React from "react";
import img1 from '../../stylization/imgs/designer.jpeg';
import img2 from '../../stylization/imgs/director.jpeg';
import img3 from '../../stylization/imgs/developer.jpeg';
import git from '../../stylization/icons/github.svg'
import fb from '../../stylization/icons/facebook.svg';
import lkd from '../../stylization/icons//linkedin.svg';
import '../../stylization/css/index_light_n_dark.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Team() {
    return (
        <section className="team">
            <h2>Nosso Time</h2>
            <CardGroup className="time">   
                <Card className="designer">
                    <Card.Img src={img1} />
                    <Card.Body>
                        <Card.Title>Elias Torgersen de Souza</Card.Title>
                        <Card.Text>UX Designer</Card.Text>
                        <a class='github' href='https://github.com/' target="_blank"><img src={git} alt="Git Hub" style={{ width: 32, height: 32 }} /></a>
                        <a class='facebook' href='https://www.facebook.com/' target="_blank"><img src={fb} alt="Facebook" style={{ width: 32, height: 32 }} /></a>
                        <a class='linkedin' href='https://www.linkedin.com/' target="_blank"><img src={lkd} alt="LinkedIn" style={{ width: 32, height: 32 }} /></a>
                    </Card.Body>
                </Card>

                <Card className="director">
                    <Card.Img src={img2} />
                    <Card.Body >
                        <Card.Title>Andreza Kaneda dos Santos</Card.Title>
                        <Card.Text>Production Director</Card.Text>
                        <a class='github' href='https://github.com/' target="_blank"><img src={git} alt="Git Hub" style={{ width: 32, height: 32 }} /></a>
                        <a class='facebook' href='https://www.facebook.com/' target="_blank"><img src={fb} alt="Facebook" style={{ width: 32, height: 32 }} /></a>
                        <a class='linkedin' href='https://www.linkedin.com/' target="_blank"><img src={lkd} alt="LinkedIn" style={{ width: 32, height: 32 }} /></a>
                    </Card.Body>
                </Card>

                <Card className="developer">
                    <Card.Img src={img3} />
                    <Card.Body>
                        <Card.Title>Mathew Singleton da Silva</Card.Title>
                        <Card.Text>Lead Developer</Card.Text>
                        <a class='github' href='https://github.com/' target="_blank"><img src={git} alt="Git Hub" style={{ width: 32, height: 32 }} /></a>
                        <a class='facebook' href='https://www.facebook.com/' target="_blank"><img src={fb} alt="Facebook" style={{ width: 32, height: 32 }} /></a>
                        <a class='linkedin' href='https://www.linkedin.com/' target="_blank"><img src={lkd} alt="LinkedIn" style={{ width: 32, height: 32 }} /></a>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section>
    )
}

import Container from 'react-bootstrap/Container';
import Carrosel from '../../partials/Carousel/Carousel';
import SobreNos from './About-Us';
import Team from './Team';
import '../../stylization/css/index.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='body'>
            <Container fluid>
                <Carrosel />
                <hr></hr>
                <Container fluid>
                    <SobreNos id="about-us" />
                    <hr></hr>
                </Container>
            </Container>
            <Container fluid>
                <Team id="team" />
                <hr></hr>
            </Container>
            <Container fluid>
            <Link to="/products"><h2>Produtos</h2></Link>
            </Container>
            <br></br>
        </div>
    )
}

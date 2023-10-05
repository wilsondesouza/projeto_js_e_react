import Container from 'react-bootstrap/Container';
import Carrosel from '../../partials/Carousel/Carousel';
import SobreNos from './About-Us';
import Team from './Team';
import '../../stylization/css/style.css'
import { Link } from 'react-router-dom';
/*import { Container, Box, BoxTitle, BoxText } from './HomePageStyles';*/

export default function HomePage() {
    return (

        <div className='body'>
            <div className='grid-container'>
                <main>
            <Container fluid>
                <Carrosel />
                <br></br>
                <Container fluid>
                    <SobreNos id="about-us" />
                    
                </Container>
            </Container>
            <Container fluid>
                <Team id="team" />
                <br></br>
            </Container>
            <Container fluid>
            <Link to="/products" className='produtos'><h2 >Produtos</h2></Link>
            </Container>
            <br></br>
            </main>
            </div>
        </div>
    )
}

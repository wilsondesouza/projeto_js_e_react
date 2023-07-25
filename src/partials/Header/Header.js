import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import '../../stylization/css/index_light_n_dark.css';
import HomePage from '../../pages/Home/HomePage';
import Products from '../../pages/Products/Products';
import SobreNos from '../../pages/Home/About-Us';
import Team from '../../pages/Home/Team';


function Header() {
    return (
        <Navbar expand="lg" className="menu">
            <Container>
                <Navbar.Brand fluid><Link className='central nav-link' to="/" element={<HomePage />}><h2>Universo do Saber</h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="trio me-auto">
                        <Link className='nav-link' to="/" element={<SobreNos />}><p>Sobre Nós</p></Link>
                        <Link className='nav-link' to="/" element={<Team />}><p>Time</p></Link>
                        <Link className='nav-link' to="products" element={<Products />}><p>Produtos</p></Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}
export default Header;
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='nav-container'>
                <Navbar.Brand as={Link} to={'personal-website-demo/'}>My Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'personal-website-demo/home'}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={'personal-website-demo/blog'}>
                            Blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;

import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    const { pathname } = useLocation();
    return (
        <Navbar bg="light" expand="lg">
            <Container className='nav-container'>
                <Navbar.Brand as={Link} to={`${pathname}/`}>My Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`${pathname}/home`}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={`${pathname}/blog`}>
                            Blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;

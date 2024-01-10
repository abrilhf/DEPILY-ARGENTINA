import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBarDepily() {
  return (
    <Navbar expand="lg" fixed="top" className="navBar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/productos">Productos</Link>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarDepily;
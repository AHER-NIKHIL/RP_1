import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">E-Commerse</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Nav.Link><Link className='nav' to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className='nav' to="/Products">Products</Link></Nav.Link>
          <Nav.Link><Link className='nav' to="/Cart">Cart</Link></Nav.Link>
          <Nav.Link><Link className='nav' to="/Contact">Contact</Link></Nav.Link>
          <Nav.Link><Link  className='nav'to="/Setting">Setting</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse> 
    </Container>
  </Navbar>
  );
}


export default NavBar;
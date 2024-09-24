import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
   
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
      <p className='content'>@copyright 2024</p>
      </Container>
    </Navbar>

  );
}

export default Footer;
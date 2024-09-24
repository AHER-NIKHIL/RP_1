import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Toy from './assets/images/Toy.jpg'
import Mobile from './assets/images/Mobile.jpg'
import homeappliances from './assets/images/homeappliances.jpg'
import clothes from './assets/images/clothes.jpg'
import flowers from './assets/images/flowers.jpg'
import Gym from './assets/images/Gym.webp'

function Esection() {
  return (
    <div>
    <Container>
      <Row className='main-nav'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Toy} />
      <Card.Body>
        <Card.Title>TOY</Card.Title>
        <Card.Text>
          For Babys.......
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>
     <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Mobile} />
      <Card.Body>
        <Card.Title>MOBILE</Card.Title>
        <Card.Text>
          Sumsung.........
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>
     <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={homeappliances} />
      <Card.Body>
        <Card.Title>HOMEAPPLIANCES</Card.Title>
        <Card.Text>
          homeapp.......
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>
      </Row>
      <Row className='main-nav'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clothes} />
      <Card.Body>
        <Card.Title>CLOTHES</Card.Title>
        <Card.Text>
          MENS/FEMALE
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>

     <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flowers} />
      <Card.Body>
        <Card.Title>FLOWERS</Card.Title>
        <Card.Text>
          Flowers..........
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>

     <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Gym} />
      <Card.Body>
        <Card.Title>CLOTHES</Card.Title>
        <Card.Text>
          MENS/FEMALE
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     </Col>
     </Row>
    </Container>
    </div>
  );
}

export default Esection;
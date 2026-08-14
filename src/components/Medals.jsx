import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Medals = () => {

  const models = [
    {
      id: 1,
      title: "Bharat Ratna is India's highest civilian award.",
      description: 'Kalam received it in 1997 for his contributions to science and public service.',
      image: '/images/1medal.jpg',
    },
    {
      id: 2,
      title: "He received the Padma Vibhushan in 1990.",
      description: 'It recognized his exceptional contribution to science and engineering.',
      image: '/images/2medal.jpg',
    },
    {
      id: 3,
      title: "He received the Padma Bhushan in 1981.",
      description: 'It was awarded for his distinguished contribution to the nation.',
      image: '/images/3medal.jpg',
    }
  ]
  return (
    <Container id='medals' className="h-100vh d-flex flex-column justify-content-center align-items-center text-light">
      <h1 className='text-dark text-center my-5'>MEDALS</h1>
      <Container>
        <Row xs={1} md={3} className="g-3">
          {models.map((model) => (
            <Col key={model.id}>
              <Card className="d-flex align-items-center justify-content-center">
                <img src={model.image} className="card-img-top" style={{ width: '300px', height: '400px', objectFit: 'cover' }} alt={model.title} />
                <Card.Body>
                  <Card.Title>{model.title}</Card.Title>
                  <Card.Text>{model.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Medals

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Kalam was the Project Director of SLV-3.',
      description: 'It successfully placed the Rohini satellite (RS-1) into orbit in July 1980',
      image: ['/src/assets/1apj.jpg', '/src/assets/1aapj.jpg', '/src/assets/1bapj.jpg'],
      interval: [3000, 2000, 3000]
    },
    {
      id: 2,
      title: 'Kalam played a leading role in the IGMDP.',
      description: 'The programme contributed to the development of missiles including Agni and Prithvi',
      image: ['/src/assets/2apj.jpg', '/src/assets/2aapj.jpg', '/src/assets/2bapj.jpg'],
      interval: [3000, 2000, 3000]
    },
    {
      id: 3,
      title: 'Kalam helped develop the vision of Technology Vision 2020.',
      description: 'It focused on making India a developed nation through science, technology and innovation.',
      image: ['/src/assets/3apj.jpg', '/src/assets/3aapj.jpg'],
      interval: [3000, 2000, 3000]
    },
    {
      id: 4,
      title: 'PURA aimed to provide better facilities and connectivity in rural areas.',
      description: 'It focused on physical, electronic, knowledge and economic connectivity.',
      image: ['/src/assets/4apj.jpg', '/src/assets/4aapj.jpg', '/src/assets/4bapj.jpg'],
      interval: [3000, 2000, 3000]
    }
  ]
  return (
    <Container id='projects' className="h-100vh d-flex flex-column justify-content-center align-items-center text-light">
        <h1 className='text-dark text-center my-5'>PROJECTS</h1>
    <Container >
      <Row xs={1} md={4} className="g-3">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="d-flex align-items-center justify-content-center">
              <Carousel className="w-100" style={{ maxWidth: '400px', maxHeight: '400px' }}>
                {
                  project.image.map((imgSrc, index) => (
                    <Carousel.Item interval={project.interval[index]} key={index}>
                      <img src={imgSrc} className="d-block" style={{ width: '100%', height: "300px", objectFit: 'cover' }} />
                    </Carousel.Item>

                  ))
                }
              </Carousel>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </Container>
  )
}

export default Projects

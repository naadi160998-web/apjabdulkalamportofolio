import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Banner = () => {
  const listItems = [
    "“Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.”",
    "“You have to dream before your dreams can come true.”",
    "“Dream is not that which you see while sleeping; it is something that does not let you sleep.”","“If you want to shine like a sun, first burn like a sun.”",
    "“All of us do not have equal talent. But all of us have an equal opportunity to develop our talents.”",
    "“Excellence is a continuous process and not an accident.”",
    "“Man needs his difficulties because they are necessary to enjoy success.”",
    "“Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.”",
    "“You cannot change your future, but you can change your habits, and surely your habits will change your future.”",
    "“To succeed in your mission, you must have single-minded devotion to your goal.”"
  ]
  return (
    <Container id="home" fluid className="h-100vh d-flex flex-column justify-content-center align-items-center  p-5 text-light" style={{ backgroundColor: '#343a40' }}>
      <Row className="w-100" xs={1} md={2} className="g-4">
        <Col className='d-flex justify-content-center align-items-center'>
          <Image src="/src/assets/banner.png" rounded className="img-fluid" />
        </Col>
        <Col className='d-flex flex-column justify-content-center'>
          <h1 className="display-4 fs-3 fw-bold">Dr. A.P.J. Abdul Kalam</h1>
          <p className="lead fs-6">The People's President of India, a visionary scientist, and an inspiration to millions.</p>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
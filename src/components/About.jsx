import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
      <Container id='about' className="h-100vh d-flex flex-column justify-content-center align-items-center text-light">
        <h1 className='text-dark text-center my-5'>ABOUT US</h1>
        <Container className=" d-flex flex-column justify-content-center align-items-center p-5 text-light" style={{ backgroundColor: '#f1f1f1' }}>
          <Row className="w-100" xs={1} md={2} className="g-4">
            <Col className='d-flex justify-content-center align-items-center'>
              <Image src="/images/about.png" rounded className="w-50" />
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h1 className="display-4 text-dark fs-3 fw-bold">Dr. A.P.J. Abdul Kalam</h1>
              <p className="lead text-dark fs-6">Dr. A. P. J. Abdul Kalam was a great Indian scientist and the 11th President of India. He was born on 15 October 1931 in Rameswaram, Tamil Nadu. He played an important role in India's space and missile development programs and is popularly known as the “Missile Man of India.” He received the Bharat Ratna, India's highest civilian award, in 1997. Kalam was also a respected teacher and author who inspired millions of students to dream big and work hard. He served as President from 2002 to 2007. He passed away on 27 July 2015 while delivering a lecture to students. He is remembered for his simplicity, dedication, and inspiring vision for India's future.</p>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default About

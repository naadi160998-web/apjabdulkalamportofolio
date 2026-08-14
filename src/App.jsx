import Container from 'react-bootstrap/Container';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Achievments from './components/Achievments';
import Medals from './components/Medals';
import Footer from './components/Footer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {

  return (
    <>
      <Container fluid className="h-100vh d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
        <Navbar className="w-100" bg="dark" data-bs-theme="dark" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
              <Nav.Link href="#medals">Medals</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Banner id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Achievments id="achievements" />
        <Medals id="medals" />
        <Footer />
      </Container>
    </>
  )
}

export default App

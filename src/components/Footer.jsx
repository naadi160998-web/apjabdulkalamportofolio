import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light py-2 text-center">
      <p className="mb-0 fs-6">&copy; {new Date().getFullYear()} APJ Abdul Kalam Portfolio. All rights reserved.</p>
    </Container>
  )
}

export default Footer

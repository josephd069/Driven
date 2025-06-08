import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // optional helper

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="flex shadow-sm">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">FairwayPro</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>
            <LinkContainer to="/golf"><Nav.Link>Golf</Nav.Link></LinkContainer>
            <LinkContainer to="/lessons"><Nav.Link>Lessons</Nav.Link></LinkContainer>
            <LinkContainer to="/fittings"><Nav.Link>Fittings</Nav.Link></LinkContainer>
            <LinkContainer to="/book"><Nav.Link>Book</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
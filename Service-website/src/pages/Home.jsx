import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/gettyimages-85836947.webp"; 
import useRevealOnScroll from "../components/Fade";

export default function Home() {
  useRevealOnScroll();

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="hero-golf position-relative text-white d-flex align-items-center">
        {/* dark overlay for readability */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,.45)" }}
        />
        <Container className="position-relative z-1 py-5 reveal up text-center">
          <h1 className="display-3 fw-bold">
            Your Complete&nbsp;Golf&nbsp;Experience
          </h1>
          <p className="lead mb-4">
            Championship courses, expert instruction, and custom-fitted clubs
            —all in one place.
          </p>
    
        </Container>
      </section>

      {/* ─── Feature cards ────────────────────────────────────── */}
      <Container className="py-5 reveal up">
        <Row className="g-4">
          {/* Courses */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img variant="top" src={heroImg} alt="Golf course" />
              <Card.Body>
                <Card.Title className="fw-bold">Play Our Courses</Card.Title>
                <Card.Text className="small text-muted">
                  18-hole championship, 9-hole academy loop, and a pristine
                  driving range.
                </Card.Text>
                <Button size="lg" variant="success" href="/Driven/golf">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Lessons */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img variant="top" src={heroImg} alt="Golf lesson" />
              <Card.Body>
                <Card.Title className="fw-bold">Improve with Lessons</Card.Title>
                <Card.Text className="small text-muted">
                  PGA-certified coaches and tech-driven swing analysis.
                </Card.Text>
                <Button size="lg" variant="success" as={Link} to="/lessons">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Fittings */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img
                variant="top"
                src={heroImg}
                alt="Club fitting"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Get Custom Fit</Card.Title>
                <Card.Text className="small text-muted">
                  Precision data, brand-neutral advice, on-site build &amp;
                  adjust.
                </Card.Text>
                <Button size="lg" variant="success" href="/Driven/fittings">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
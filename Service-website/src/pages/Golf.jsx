import { Container, Row, Col, Button, Card } from "react-bootstrap";
import course18 from "../assets/18hole.jpg";
import course9 from "../assets/9hole.jpg";
import Range from "../assets/DrivingRange.jpeg";
import useRevealOnScroll from "../components/Fade";


export default function Golf() {
    useRevealOnScroll();
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold reveal up">Our Courses</h2>
      <Row className="g-5">
        {/* 18‑Hole Course */}
        <Col xs={12}>
          <Card className="shadow-sm border-success reveal up">
            <Row className="g-0 flex-column flex-md-row">
              <Col md={6}>
                <Card.Img src={course18} className="h-100 object-fit-cover" />
              </Col>
              <Col md={6} className="d-flex flex-column p-4">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4">18‑Hole Championship Course</Card.Title>
                  <Card.Text className="flex-grow-1">
                    Our flagship par‑72 course stretches 7,100 yards, featuring
                    bent‑grass greens, sculpted bunkers, and breathtaking
                    water hazards—ideal for competitive play and corporate
                    outings.
                  </Card.Text>
                  <Button href="/Driven/book" variant="success" size="lg">
                    Book now
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 9‑Hole Course */}
        <Col xs={12}>
          <Card className="shadow-sm border-success reveal up">
            <Row className="g-0 flex-column flex-md-row">
              <Col md={6} className="order-md-2">
                <Card.Img src={course9} className="h-100 object-fit-cover" />
              </Col>
              <Col md={6} className="d-flex flex-column p-4">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4">9‑Hole Executive Course</Card.Title>
                  <Card.Text className="flex-grow-1">
                    Perfect for a quick round—par 31 with challenging doglegs
                    and elevated greens—ideal for beginners or lunchtime
                    practice.
                  </Card.Text>
                  <Button href="/Driven/book" variant="success" size="lg">
                    Book now
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Driving Range */}
        <Col xs={12}>
          <Card className="shadow-sm border-success reveal up">
            <Row className="g-0 flex-column flex-md-row">
              <Col md={6}>
                <Card.Img src={Range} className="h-100 object-fit-cover" />
              </Col>
              <Col md={6} className="d-flex flex-column p-4">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4">All‑Season Driving Range</Card.Title>
                  <Card.Text className="flex-grow-1">
                    25 covered bays with Toptracer™ technology, grass tees,
                    and short‑game practice area open year‑round.
                  </Card.Text>
                  <Button href="/Driven/book" variant="success" size="lg">
                    Book now
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
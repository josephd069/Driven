import { Container, Row, Col, Card } from "react-bootstrap";

const SERVICES = [
  {
    category: "Training",
    title: "Swing Coaching",
    desc: "60‑minute private session focusing on grip, stance & swing plane.",
    img: "/service-training.jpg",
    price: "$90 / hr",
  },
  {
    category: "Training",
    title: "On‑Course Lesson",
    desc: "Play nine holes with a PGA‑certified instructor.",
    img: "/service-oncourse.jpg",
    price: "$140 / 9 holes",
  },
  {
    category: "Caddie",
    title: "Tournament Caddie",
    desc: "Full‑day bag carrying, course management & yardage.",
    img: "/service-caddie.jpg",
    price: "$200 / round",
  },
  {
    category: "Tee Time",
    title: "Prime Morning Slot",
    desc: "Reserve a coveted 7–9 AM tee time on weekends.",
    img: "/service-teetime.jpg",
    price: "$120 / foursome",
  },
];

export default function Services() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold text-center">Our Services</h2>
      <Row className="g-4">
        {SERVICES.map((svc) => (
          <Col xs={12} md={6} lg={4} key={svc.title}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={svc.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="text-muted mb-1">
                  {svc.category}
                </Card.Subtitle>
                <Card.Title>{svc.title}</Card.Title>
                <Card.Text className="flex-grow-1">{svc.desc}</Card.Text>
                <div className="fw-semibold mb-2">{svc.price}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  FloatingLabel,
  Tabs,
  Tab,
  Alert,
  Table
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Book() {
  const [searchParams] = useSearchParams();
  const defaultKey = searchParams.get("service") ?? "tee";
  const [key, setKey] = useState(defaultKey);
  const [showConf, setShowConf] = useState(false);
  const [price, setPrice] = useState(0);

  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    e.target.reset();
  };

  // Tee‑time state
  const [teeData, setTeeData] = useState({ option: "", players: 1, date: "", time: "" });
  const teePrices = { 18: 90, 9: 45, range: 20 };

  return (
    <>
    <Container className="py-5">
      <h1 className="text-center mb-4 fw-bold">Book Your Experience</h1>

      <Tabs activeKey={key} onSelect={k => { setKey(k); setShowConf(false); }} className="mb-4 booking-tabs" justify>
        <Tab eventKey="tee" title="Tee Time">
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <Form.Group className="mb-3">
              <Form.Label>Option</Form.Label>
                <Form.Select value={teeData.option} onChange={e => {
                  const option = e.target.value;
                  setTeeData({ ...teeData, option });
                  setPrice(teePrices[option] * teeData.players);
                }}>
                  <option value="">Choose…</option>
                  <option value="18">18‑Hole Course – $90</option>
                  <option value="9">9‑Hole Course – $45</option>
                  <option value="range">Driving Range – $20</option>
                </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Label>Players</Form.Label>
                <Form.Control type="number" min={1} max={4} value={teeData.players} onChange={e => {
                  const players = +e.target.value;
                  setTeeData({ ...teeData, players });
                  setPrice(teePrices[teeData.option] * players);
                }} />
              </Col>
              <Col md={4}>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={teeData.date} onChange={e => setTeeData({ ...teeData, date: e.target.value })} />
              </Col>
              <Col md={4}>
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" value={teeData.time} onChange={e => setTeeData({ ...teeData, time: e.target.value })} />
              </Col>
            </Row>

            <FloatingLabel label="Full Name" className="mb-3">
              <Form.Control type="text" placeholder="John Doe" required />
            </FloatingLabel>

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" required />
            </FloatingLabel>

            <FloatingLabel label="Phone" className="mb-3">
              <Form.Control type="tel" placeholder="123‑456‑7890" />
            </FloatingLabel>

            <FloatingLabel label="Notes / Special Requests" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "120px" }} />
            </FloatingLabel>

            <Table bordered className="w-auto ms-auto mb-3">
              <tbody>
                <tr><th>Total</th><td>${price || teePrices[teeData.option]}</td></tr>
              </tbody>
            </Table>

            <Button type="submit" variant="success" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="lesson" title="Lessons">
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Select required>
                <option value="">Choose…</option>
                <option>Consultation</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" required />
              </Col>
              <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" required />
              </Col>
            </Row>

            <FloatingLabel label="Full Name" className="mb-3">
              <Form.Control type="text" placeholder="John Doe" required />
            </FloatingLabel>

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" required />
            </FloatingLabel>

            <FloatingLabel label="Phone" className="mb-3">
              <Form.Control type="tel" placeholder="123‑456‑7890" />
            </FloatingLabel>

            <FloatingLabel label="Notes / Special Requests" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "120px" }} />
            </FloatingLabel>

            <Button type="submit" variant="success" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="fitting" title="Fittings">
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Select required>
                <option value="">Choose…</option>
                <option>Personal Training</option>
                <option>Professional Caddie</option>
                <option>Tee Time</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" required />
              </Col>
              <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" required />
              </Col>
            </Row>

            <FloatingLabel label="Full Name" className="mb-3">
              <Form.Control type="text" placeholder="John Doe" required />
            </FloatingLabel>

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" required />
            </FloatingLabel>

            <FloatingLabel label="Phone" className="mb-3">
              <Form.Control type="tel" placeholder="123‑456‑7890" />
            </FloatingLabel>

            <FloatingLabel label="Notes / Special Requests" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "120px" }} />
            </FloatingLabel>

            <Button type="submit" variant="success" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Tab>
      </Tabs>

      {showConf && (
        <Alert variant="success" className="mt-4" onClose={() => setShowConf(false)} dismissible>
          Booking received! We’ll email you a confirmation shortly.
        </Alert>
      )}

      {/* Confirmation modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your booking request has been submitted. We’ll send a confirmation
          email shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
    </>
  );
}
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setShow(true);
      e.target.reset();
    };

  return (
    <Container className="py-5">
      <Row className="g-4 ">
        <h1 className="mb-4 text-center fw-bold">Get In Touch</h1>
        {/* Map & Contact Info */}
        <Col md={7}>
          <div className="ratio ratio-4x3 mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10692.829274920472!2d-75.56721040805814!3d45.32802109823906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgolf!5e0!3m2!1sen!2sca!4v1749438670538!5m2!1sen!2sca" 
              title="FairwayPro location"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Col>
        <Col md ={3} className="mt-5 m-5">
          <address>
            <strong>Driven Golf Club</strong>
            <br />4335 Hawthorne Rd
            <br />Ramsayville, ON K1G 3N4
            <br />
            <abbr title="Phone">P:</abbr> (613) 555‑GOLF
            <br />
            <abbr title="Email">E:</abbr> info@driven.com
            <br />
            <abbr title="Hours">H:</abbr> Monday - Sunday: 8:00 AM - 6:00 PM
          </address>
        </Col>
        {/* Contact Form */}
        <Col xs={12} md={8}>
        <h2 className="mb-4 fw-bold">Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="How can we help?" required />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100">
              Send message
            </Button>
          </Form>
        </Col>
      </Row>
      {/* Confirmation modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been submitted. We’ll send a confirmation
          email shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
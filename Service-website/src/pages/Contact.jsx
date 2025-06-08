import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly."); // stub
  };

  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* Contact Form */}
        <Col xs={12} md={6}>
          <h2 className="mb-4 fw-bold">Get in touch</h2>
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

            <Button type="submit" variant="success">
              Send message
            </Button>
          </Form>
        </Col>

        {/* Map & Contact Info */}
        <Col xs={12} md={6}>
          <div className="ratio ratio-4x3 mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89610.78623848315!2d-75.70915015937948!3d45.42270619541957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce1b48e81b5c47%3A0x638eec521df79705!2sClub%20Pigale!5e0!3m2!1sen!2sca!4v1749247950703!5m2!1sen!2sca" /* replace with your embed link */
              title="FairwayPro location"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <address className="small">
            <strong>FairwayPro Training Center</strong>
            <br />99 Bd Gréber
            <br />Gatineau, QC J8T 3P9
            <br />
            <abbr title="Phone">P:</abbr> (613) 555‑GOLF
            <br />
            <abbr title="Email">E:</abbr> info@fairwaypro.ca
          </address>
        </Col>
      </Row>
    </Container>
  );
}
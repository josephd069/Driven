import { Container, Row, Col, Button, Card } from "react-bootstrap";
import useRevealOnScroll from "../components/Fade";
import lessonsCoach from "../assets/lessons-coach.jpg";
import lessonsPlan from "../assets/lesson-plan.jpg";
import lessonsAnalyze from "../assets/lesson-analyze.webp";

import { Link } from "react-router-dom";

export default function Lessons() {
    useRevealOnScroll();
  
    return (
    <>
      
      {/* Hero as full‑width background */}
      <section className="lesson-hero position-relative text-white d-flex align-items-center">
        {/* Dark overlay for readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:"rgba(0,0,0,.45)"}}></div>
        <Container className="position-relative z-1">
          <Row className="justify-content-start">
            <Col lg={8} className="reveal up">
              <h1 className="display-3 fw-bold">LESSONS</h1>
              <p className="lead fs-4">
                Whether you’re breaking 100 for the first time or chasing a
                scratch handicap, our tailored instruction gets you there
                faster—with proven drills, video analysis, and on‑course
                strategy sessions.
              </p>
              <Button variant="success" size="lg" as={Link} to="/book">
                Book a Lesson
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Section 1 */}
      <section className="bg-white py-5">
        <Container>
          <Row className="align-items-center g-5 reveal right">
            <Col md={6}>
              <h2 className="fw-bold mb-3">PGA‑Certified Coaches</h2>
              <p className="fs-5 text-muted">
                Our instructors are <strong>PGA of Canada</strong> Class A professionals
                with decades of competitive and teaching experience. They combine
                modern pedagogy with a genuine love for helping golfers of all ages
                and abilities reach new milestones.
              </p>
            </Col>
            <Col md={6}>
              <img src={lessonsCoach} alt="Coach giving swing advice" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center flex-md-row-reverse g-5 reveal left">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Personalized Lesson Plans</h2>
              <p className="fs-5 text-muted">
                Every program begins with a <strong>goal‑setting consultation</strong> and
                swing assessment. You’ll receive a tailored roadmap featuring
                drill videos, practice yardages, and on‑course strategy tips—all
                accessible via our mobile app so you can track progress anywhere.
              </p>
            </Col>
            <Col md={6}>
              <img src={lessonsPlan} alt="Customized lesson plan" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-5">
        <Container>
          <Row className="align-items-center g-5 reveal right">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Tech‑Driven Analysis</h2>
              <p className="fs-5 text-muted">
                High‑speed cameras, <strong>TrackMan® 4</strong>, and pressure‑plate mats
                reveal the unseen—club path, face angle, dynamic lie, ground
                force, and more. Real‑time data lets students internalize feel vs.
                real and shorten the feedback loop from swing thought to result.
              </p>
            </Col>
            <Col md={6}>
              <img src={lessonsAnalyze} alt="Launch monitor data" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seamless CTA */}
      <section className="cta-fitting reveal up text-white py-5 d-flex align-items-center">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">Ready to transform your swing?</h2>
          <Button variant="light" size="lg" as={Link} to="/book">
            Reserve Your Lesson
          </Button>
        </Container>
      </section>
    </>
  );
}
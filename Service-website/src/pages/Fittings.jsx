import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useRevealOnScroll from "../components/Fade";
import fitTrack from "../assets/fit-track.jpg";
import fitBrand from "../assets/fit-brand.jpg";
import fitBuild from "../assets/fit-build.avif";
import { Link } from "react-router-dom";


export default function Fittings() {
    useRevealOnScroll();
  
    return (
    <>
      {/* Hero with full‑width background */}
      <section className="fitting-hero position-relative text-white d-flex align-items-center">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,.45)" }}></div>
        <Container className="position-relative z-1">
          <Row>
            <Col lg={7} md={9} className="reveal up">
              <h1 className="display-3 fw-bold">CLUB FITTINGS</h1>
              <p className="lead fs-4">
                Unlock every yard and tighten every shot dispersion. Our tour‑level
                fitting experience pairs cutting‑edge tech with brand‑agnostic
                expertise—so you leave with sticks built for <em>your</em> swing.
              </p>
              <Button variant="success" size="lg" as={Link} to="/book">
                Book a Fitting
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
              <h2 className="fw-bold mb-3">Data‑Driven Analysis</h2>
              <p className="fs-5 text-muted">
                Using <strong>TrackMan® 4</strong> and high‑speed cameras we capture ball speed,
                launch angle, spin rate, club path, and face orientation—providing a complete
                3‑D picture of every swing. These precise numbers guide each recommendation,
                ensuring measurable gains.
              </p>
            </Col>
            <Col md={6}>
              <img src={fitTrack} alt="TrackMan data screen" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center flex-md-row-reverse g-5 reveal left">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Brand‑Neutral Options</h2>
              <p className="fs-5 text-muted">
                Titleist, TaylorMade, Callaway, Ping, Mizuno, Cobra—<em>you</em> name it. We’re
                not tied to any single OEM, which means the best shaft and head combination
                for your swing wins every time. Try <strong>30+ premium shafts</strong> and
                multiple head styles until the data says “yes.”
              </p>
            </Col>
            <Col md={6}>
              <img src={fitBrand} alt="Various iron heads" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-5">
        <Container>
          <Row className="align-items-center g-5 reveal right">
            <Col md={6}>
              <h2 className="fw-bold mb-3">On‑Site Build & Fine‑Tuning</h2>
              <p className="fs-5 text-muted">
                Once specs are locked, our workshop hand‑builds your clubs to exact length,
                loft, lie, and swing‑weight—using <strong>tour‑grade epoxy</strong> and
                frequency matching for consistent feel. Need tweaks after a few rounds?
                Enjoy complimentary loft/lie adjustments within 30 days.
              </p>
            </Col>
            <Col md={6}>
              <img src={fitBuild} alt="Club building workshop" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="cta-fitting reveal up text-white py-5 d-flex align-items-center">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">Ready to dial in your bag?</h2>
          <Button variant="light" size="lg" as={Link} to="/book">
            Schedule Your Session
          </Button>
        </Container>
      </section>
    </>
  );
}
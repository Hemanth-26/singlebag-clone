import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function BannerTitle() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Container fluid className="py-5">
      <Row>
        <Col>
          <div data-aos="fade-up" data-aos-once="true">
            <h1>
              The Global <br /> Commerce Platform For You
            </h1>
            <p className="text-secondary my-4 fs-4">
              Building your business is now made easy with Singlebag!
            </p>
            <Button variant="primary" className="mx-2 px-4 py-3 fw-bold">
              Start your free trial -&gt;
            </Button>
          </div>
          <p className="text-secondary my-4 fs-5">
            Try Singlebag free for 14 days, no credit card required. Start your
            online store without any coding knowledge.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BannerTitle;

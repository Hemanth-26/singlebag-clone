import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function BannerTitle() {
  return (
    <Container fluid className="py-5">
      <Row>
        <Col>
          <h1>
            The Global <br /> Commerce Platform For You
          </h1>
          <p className="text-secondary my-4 fs-4">
            Building your business is now made easy with Singlebag!
          </p>
          <Button variant="primary" className="mx-2 px-4 py-3 fw-bold">
            Start your free trial  -&gt;
          </Button>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <Container fluid className="py-5">
      <Row className="mb-4">
        <Col>
          <img
            src="https://singlebag.com/wp-content/uploads/elementor/thumbs/Singlebag-New-Logo-q0ghwli28fpa7b5cr96pk83meupj9fip4dbugdvwqy.png"
            alt=""
            className="footer-img"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p className="footer-para">
            Singlebag is an efficient and user-friendly eCommerce platform that
            provides you with all advanced facilities and powerful tools to
            start your online store without any coding knowledge. Whether you
            are a start-up or an established business, Singlebag is an
            all-in-one e-commerce platform that helps to stabilize and
            accelerate your online business.{" "}
            <b>We help in making your dream of business a reality.</b>
          </p>
        </Col>
      </Row>
      <Row className="mb-5 d-flex">
        <Col xs={12} md={4}>
          <h6 className="mb-4 fs-3 ps-4">COMMUNITY</h6>

          <ul className="footer-list">
            <li>Forums</li>
            <li>Blogs</li>
            <li>Academy</li>
            <li>Knowledge</li>
          </ul>
        </Col>

        <Col xs={12} md={4}>
          <h6 className="mb-4 fs-3 ps-4">COMPANY</h6>

          <ul className="footer-list">
            <li>About Us</li>
            <li>Partner Program</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Get in touch</li>
          </ul>
        </Col>

        <Col xs={12} md={4}>
          <h6 className="mb-4 fs-3 ps-4">POLICY</h6>

          <ul className="footer-list">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p className="text-center footer-copyright">
            &#169; 2023 | Singlebag - An Orange Holdings Company | All Rights
            Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

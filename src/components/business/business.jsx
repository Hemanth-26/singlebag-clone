import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./business.scss";

function Business() {
  const data = [
    {
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Ambitious-Seller.jpg",
      heading: " Ambitious Seller ",
      desc: "Get start your business with Singlebag and sell to global consumers",
    },
    {
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Smart-Supplier.jpg",
      heading: " Smart Supplier ",
      desc: "Maximize your sales revenue with 1000+ Singlebag Resellers",
    },
    {
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Rational-Reseller.jpg",
      heading: " Rational Reseller ",
      desc: "Run your business with zero inventory and earn profits ",
    },
  ];
  return (
    <Container fluid className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-5">Ecommerce Business For Everyone!</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        {data.map((item) => (
          <Col sm={12} lg={4}>
            <div className="business-con mb-3">
              <img src={item.image} alt="" className="business-img" />
              <p className="business-title">{item.heading}</p>
              <p className="business-desc mx-5">{item.desc}</p>
              <Button variant="primary" className="mx-2 px-4 py-3 fw-bold">
                Know More --&gt;
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Our Partners</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Business;

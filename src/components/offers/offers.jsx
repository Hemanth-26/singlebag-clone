import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./offers.scss";

function Offers() {
  const dataOne = [
    {
      image: "https://singlebag.com/wp-content/uploads/2022/12/hosting.png",
      heading: " Start an online business ",
      desc: "Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!",
    },
    {
      image: "https://singlebag.com/wp-content/uploads/2022/12/wholesale.png",
      heading: " Start an online business ",
      desc: "Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!",
    },
    {
      image:
        "https://singlebag.com/wp-content/uploads/2022/12/online-shopping1.png",
      heading: " Start an online business ",
      desc: "Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!",
    },
  ];
  const dataTwo = [
    {
      image: "https://singlebag.com/wp-content/uploads/2022/12/revenue.png",
      heading: " Start an online business ",
      desc: "Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!",
    },
    {
      image: "https://singlebag.com/wp-content/uploads/2022/12/book.png",
      heading: " Start an online business ",
      desc: "Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!",
    },
  ];
  return (
    <Container fluid className="py-5">
      <Row className="mb-4">
        <Col>
          <h3>What do we offer?</h3>
        </Col>
      </Row>
      <Row>
        {dataOne.map((item) => (
          <Col sm={12} md={4}>
            <Card className="offers-cards align-items-center m-3 py-2">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-primary">{item.heading}</Card.Title>
                <Card.Text className="text-seconday">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {dataTwo.map((item) => (
          <Col sm={12} md={6}>
            <Card className="offers-cards align-items-center m-3 py-2">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-primary">{item.heading}</Card.Title>
                <Card.Text className="text-seconday">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Offers;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./singleBagSection.scss";

function SingleBagSection() {
  const images = [
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-1.jpg",
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-2.jpg",
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-3.jpg",
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-4.jpg",
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-5.jpg",
    "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Theme-6.jpg",
  ];
  return (
    <Container fluid className="py-5">
      <Row>
        <Col>
          {" "}
          <h2 className="text-center">
            Singlebag, The Best Ecommerce Platform for Best Results
          </h2>
          <p className="text-center text-secondary fs-5">
            We provide a cutting-edge platform for every business. Singlebag
            offers you the best tools to build <br /> an online store through
            which your products will reach diverse customers, be it Cafes,
            Electronics, Flowers, Fast food, Furniture, Books, or any other
            product.
          </p>
        </Col>
      </Row>

      <Row>
        {images.map((item) => (
          <Col sm={12} md={4}>
            <Card className="sbs-cards m-3">
              <Card.Img variant="top" src={item} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SingleBagSection;

import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./onlineStore.scss";

function OnlineStore() {
  const data = [
    {
      heading: "Online Store for Every Business",
      desc: "Sell anything and everything online by building an online store. The best deal is that you could sell everywhere, all around the globe. With a myriad of options for your storefront designs and abundant options for extensions, start your ecommerce store in a few simple steps and start selling with Singlebag.",
      image:
        "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-store.png",
    },
    {
      heading: "Grow Your Online Business",
      desc: "Get your online store discovered by your customers through Social media platforms, SEO tools, marketing tools. Singlebag has built-in marketing tools that help you manage marketing your online business using the best methods. These tools assist you in analyzing digital marketing campaigns and guides you with staying updated with marketing strategies.",
      image:
        "https://singlebag.com/wp-content/uploads/2022/12/Grow-your-Online-business.jpg",
    },
    {
      heading: "Reliable and Instant Checkout",
      desc: "Ease the checkout process with our multiple payment gateways and <br /> manual payment options and streamline your customers purchasing process.",
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Instant-Checkout.jpg",
    },
    {
      heading: "Your business, Your Delivery Agent",
      desc: " Manage your business delivery on your own. With our unique delivery agent app, you can deliver your products to consumers with your delivery agent and reduce the burden of third-party delivery services.",
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Your-business-Your-Delivery-Agent.jpg",
    },
    {
      heading: "Flexible Point-Of-Sale",
      desc: "Empower your business with an all-in-one POS that integrates offline marketing, sales, and inventory, with e-commerce. Turn your mobile device into a POS when you need it.",
      image:
        "https://singlebag.com/wp-content/uploads/2023/03/Flexible-Point-Of-Sale.jpg",
    },
    {
      heading: "Make Money While Managing with Ease",
      desc: "Monitor the performance of your store from a centralized dashboard. Get Constant updates and reliable 24/7 support service. Protect yourself and your visitors with a free SSL certificate and dedicated IP. Making money with an online store is just a few clicks away.",
      image:
        "https://singlebag.com/wp-content/uploads/2022/12/Singlebag-Manage-Everything.png",
    },
  ];

  return (
    <Container fluid className="py-5">
      <Row className="mb-4">
        <Col>
          <h4 className="text-center text-dr mb-4">
            Create an online store with no coding knowledge
          </h4>
          <h2 className="text-center mb-5">
            Ecommerce stores are now the powerhouse of building engaging
            business.
          </h2>
        </Col>
      </Row>
      <Row>
        {data.map((item, index) => (
          <Col sm={12}>
            <Row className={index % 2 ? "flex-row align-items-center" : "flex-row-reverse align-items-center"}>
              <Col sm={12} xl={6}>
                <h2>{item.heading}</h2>
                <p className="text-secondary fs-5">{item.desc}</p>
                <Nav className="justify-content-start fs-4 fw-bold">
                  <Nav.Link href="#">Get Started -&gt;</Nav.Link>
                </Nav>
              </Col>
              <Col sm={12} xl={6}>
                <img src={item.image} alt="" className="onlineStore-img" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OnlineStore;

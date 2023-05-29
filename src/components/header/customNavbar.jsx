import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function CustomNavbar() {
  return (
    <>
      <Navbar bg="text-white" expand="xl" className="">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                {/* Offcanvas */}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Seller</Nav.Link>
                <Nav.Link href="#">Reseller</Nav.Link>
                <Nav.Link href="#">Supplier</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
          <div className="d-xl-none">
            <Button variant="primary" className="mx-2">Login</Button>
            <Button variant="primary" className="mx-2">Create Store</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;

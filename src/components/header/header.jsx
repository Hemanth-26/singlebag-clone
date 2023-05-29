import { Button, Nav } from "react-bootstrap";
import CustomNavbar from "./customNavbar";
import "./header.scss";

function Header() {
  return (
    <>
      <header className="header-con d-flex flex-column flex-md-row align-items-md-center justify-content-lg-between">
        <div className="logo-con d-flex align-items-center justify-content-center">
          <img
            src="https://singlebag.com/wp-content/uploads/2022/06/Singlebag-New-Logo.png"
            alt="logo"
            className="website-logo"
          />
        </div>
        <div className="d-none d-xl-block">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#">Seller</Nav.Link>
            <Nav.Link href="#">Reseller</Nav.Link>
            <Nav.Link href="#">Supplier</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </div>
        <div className="nav-con">
          <CustomNavbar />

          <div className="d-none d-xl-block">
            <Button variant="primary" className="mx-2">
              Login
            </Button>
            <Button variant="primary" className="mx-2">
              Create Store
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

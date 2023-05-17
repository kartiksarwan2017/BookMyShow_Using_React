import "../Header/Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


function Header() {
  return (
    <div style={{background:"black",color: "white"}}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">
                  User Registration
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="nav-link-container">
        <div style={{display:"inline-block"}}>
        <Link to="/" className="navLinks">Movies</Link>
        <Link to="/" className="navLinks">Streams</Link>
        <Link to="/" className="navLinks">Events</Link>
        <Link to="/" className="navLinks">Play</Link>
        <Link to="/" className="navLinks">Sports</Link>
        <Link to="/" className="navLinks">Activities</Link>
        <Link to="/" className="navLinks">Buzz</Link>
        </div>

        <div style={{display:"inline-block"}}>
        <Link to="/" style={{color: "white", fontSize: 14}} className="navLinks">ListYourShow</Link>
        <Link to="/" style={{color: "white", fontSize: 14}} className="navLinks">Corporates</Link>
        <Link to="/" style={{color: "white", fontSize: 14}} className="navLinks">Offers</Link>
        <Link to="/" style={{color: "white", fontSize: 14}} className="navLinks">Gifts</Link>
        </div>
      </Container>
    </div>
  );
}

export default Header;

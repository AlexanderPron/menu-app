import React from "react";
import MenuItem from "./MenuItem";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
export default function Menu(props) {
  return (
    <Navbar bg="light" expand={false} fixed="top" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">Ииигарь!!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Гарри, с наступающим ДэРэ тебя!
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {props.menuItems.map((menuItem) => {
                return <MenuItem menuItem={menuItem} key={menuItem.id} />;
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

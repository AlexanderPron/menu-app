import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import NavigateCarousel from "./NavigateCarousel";
import { LinkContainer } from "react-router-bootstrap";

function setActiveItem(activeItemID) {
  setState(activeItemID);
}

export default function Menu(props) {
  let [activeItemID, setActiveItemID] = useState(0);
  return (
    <Navbar bg="light" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">Итоговый отчёт за 2022 год</Navbar.Brand>
        <NavigateCarousel menuItems={props.menuItems} setActiveItem={setActiveItem} />
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Разделы отчета
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

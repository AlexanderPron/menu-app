import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import NavigateCarousel from "./NavigateCarousel";
import { LinkContainer } from "react-router-bootstrap";

export default function Menu(props) {
  return (
    <Navbar bg="light" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">Итоговый отчёт за 2022 год</Navbar.Brand>
        <NavigateCarousel
          routeItems={props.routeItems}
          currentRouteID={props.routeID}
        />
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
              {props.routeItems.map((routeItem) => {
                return <MenuItem routeItem={routeItem} key={routeItem.id} />;
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

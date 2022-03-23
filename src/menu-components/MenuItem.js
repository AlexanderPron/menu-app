import React from "react";
import { Nav } from "react-bootstrap";
export default function MenuItem(props) {
  return (
    <Nav.Link href={"#" + props.menuItem.target}>
      {props.menuItem.value}
    </Nav.Link>
  );
}

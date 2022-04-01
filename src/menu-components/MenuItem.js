import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function MenuItem(props) {
  return (
    // <Nav.Link href={"#" + props.menuItem.target}>
    //   {props.menuItem.value}
    // </Nav.Link>
    <Link to={`/report/${props.menuItem.id}`}>{props.menuItem.value}</Link>
    
  );
}

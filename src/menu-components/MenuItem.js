import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function MenuItem(props) {
  if (props.menuItem.isChapterContent) {
    return (
      <LinkContainer to={`${props.menuItem.target}`}>
        <Nav.Link>{props.menuItem.value}</Nav.Link>
      </LinkContainer>
    );
  }
  return <Link to={`/`}>{props.menuItem.value}</Link>;
}

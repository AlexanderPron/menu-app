import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function MenuItem(props) {
  if (props.routeItem.isChapterContent) {
    return (
      <LinkContainer to={`${props.routeItem.target}`}>
        <Nav.Link>{props.routeItem.value}</Nav.Link>
      </LinkContainer>
    );
  }
  return <Link to={`/`}>{props.routeItem.value}</Link>;
}

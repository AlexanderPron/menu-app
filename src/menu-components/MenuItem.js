import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function MenuItem(props) {
  let [activeItemID, setActiveItemID] = useState(0);
  if (props.menuItem.isChapterContent) {
    return (
      <LinkContainer to={`/report/${props.menuItem.target}`}>
        <Nav.Link
          onClick={(event) => {
            // event.preventDefault();
            setActiveItemID(props.menuItem.id);
          }
        }
        >
          {props.menuItem.value}
        </Nav.Link>
      </LinkContainer>
    );
  }
  return <Link to={`/report`}>{props.menuItem.value}</Link>;
}

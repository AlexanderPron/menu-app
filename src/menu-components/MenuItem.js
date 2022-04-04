import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import menuItemList from "./Main";

export default function MenuItem(props) {
  let [isActive, setActiveItem]  = useState(props.menuItem.isActive)
  if (props.menuItem.isChapterContent) {
    return (
      <LinkContainer to={`/report/${props.menuItem.target}`}>
        <Nav.Link onClick={(event) => {
          event.preventDefault();
          isActive = true;
          menuItemList.map((item)=>{
            if (item.id === props.menuItem.id){
              item.isActive = true;
            }
            else {
              item.isActive = false;
            }
            return item;
          })
          setActiveItem(isActive);
          }}>
          {props.menuItem.value}
        </Nav.Link>
      </LinkContainer>
    );
  }
  return <Link to={`/report`}>{props.menuItem.value}</Link>;
}

import React from "react";
import { Link } from "react-router-dom";
import "../content.css";

export default function NavigateCarousel(props) {
  let rez = props.menuItems.map((menuItem) => {
    if (menuItem.isChapterContent) {
      let rez = menuItem.value;
      return rez;
    }
  });
  return (
    <div>
      <Link to={`/report`}> {"<"} </Link>
      {rez}
      <Link to={`/report`}> {">"} </Link>
    </div>
  );
}

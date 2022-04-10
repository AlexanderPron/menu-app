import React from "react";
import { Link } from "react-router-dom";
import "../content.css";

export default function NavigateCarousel(props) {
  let i = 0;
  let prevIndex = 0;
  let nextIndex = 0;
  let chapters = props.menuItems.filter(
    (menuItem) => menuItem.isChapterContent === true
  );
  for (let menuItem of chapters) {
    i++;
    if (menuItem.isChapterContent && menuItem.isActive) {
      if (i >= chapters.length) {
        prevIndex = i - 1;
        nextIndex = i % chapters.length;
      } else {
        prevIndex = i - 1;
        nextIndex = i + 1;
      }
    } else {
      prevIndex = 0;
      nextIndex = 2;
    }
    return (
      <div>
        <Link to={`${chapters[prevIndex].target}`}> {"<"} </Link>
        {/* {chapters[i].value} */}
        {
          props.menuItems.filter(
            (menuItem) => menuItem.target === props.routeName
          )[0].value
        }

        <Link to={`${chapters[nextIndex].target}`}> {">"} </Link>
      </div>
    );
  }
}

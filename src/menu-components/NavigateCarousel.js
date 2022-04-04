import React from "react";
import { Link } from "react-router-dom";
import "../content.css";

export default function NavigateCarousel(props) {
  let i = 0; 
  let prevIndex = 0; 
  let nextIndex = 0;
  let chapters =  props.menuItems.filter((menuItem) => menuItem.isChapterContent === true);
  for (let menuItem of chapters) {
    i++;
    if (menuItem.isChapterContent && menuItem.isActive) {
      if (i >= chapters.length) {
        prevIndex = i - 1;
        nextIndex = i % chapters.length;
      }
      else {
        prevIndex = i - 1;
        nextIndex = i + 1;
      }
    }
    else {
      prevIndex = 0;
      nextIndex = 2;
    }
    console.log(i);
    return (
      <div>
        <Link to={`/report/${chapters[prevIndex].target}`}> {"<"} </Link>
        {chapters[i].value}
        <Link to={`/report/${chapters[nextIndex].target}`}> {">"} </Link>
      </div>
    );
  };
}

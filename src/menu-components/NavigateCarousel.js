import React from "react";
import { Link } from "react-router-dom";
import "../content.css";

export default function NavigateCarousel(props) {
  // let i = 0;
  let prevIndex = 0;
  let nextIndex = 0;
  let chapters = props.routeItems.filter(
    (routeItem) => routeItem.isChapterContent === true
  );
  // let test = chapters.filter((routeItem) => {
  //   console.log(routeItem.id, props.currentRouteID);
  //   if (routeItem.id === props.currentRouteID) {
  //     return routeItem;
  //   }
  // });
  // console.log(test);
  return (
    <div>
      {/* <Link to={`${chapters[prevIndex].target}`}> {"<"} </Link> */}
      {
        chapters.filter((routeItem) => routeItem.id === props.currentRouteID)[0]
          .value
      }

      {/* <Link to={`${chapters[nextIndex].target}`}> {">"} </Link> */}
    </div>
  );
}

import React from "react";
import "../content.css";
export default function Content(props) {
  return (
    <div className="content">
      {props.menuItems.map((menuItem) => {
        // eslint-disable-next-line
        return (
          <div className={menuItem.target} key={menuItem.id}>
            {" "}
            <a name={menuItem.target}> </a>{" "}
          </div>
        );
      })}
    </div>
  );
}

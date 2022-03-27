import React from "react";
import "../content.css";
let i = 0;
export default function Content(props) {
  return (
    <div className="content">
      {props.menuItems.map((menuItem) => {
        // eslint-disable-next-line
        i += 1;
        return (
          <div className={menuItem.target} key={menuItem.id}>
            {" "}
            <a name={menuItem.target}> </a> {props.children[i - 1]}
          </div>
        );
      })}
    </div>
  );
}

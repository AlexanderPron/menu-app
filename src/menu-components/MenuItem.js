import React from "react";
import "../menu-app.css"
export default function MenuItem(props) {
    return (
        <li className="menu-item">{props.menuItem.value}</li>
    )
}
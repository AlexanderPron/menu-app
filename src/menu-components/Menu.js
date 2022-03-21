import React from "react";
import MenuItem from "./MenuItem";
import "../menu-app.css"
export default function Menu(props) {
    return (
        <ul className="menu">
            {
                props.menuItems.map(menuItem => {
                    return <MenuItem menuItem = {menuItem} key = {menuItem.id} />
                })}
        </ul>
    )
}

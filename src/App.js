import React from "react";
import Menu from "./menu-components/Menu";

function App() {
  const menuItemList = [
    {
        id: 1,
        isActive: false,
        value: "Раздел 1",
    },
    {
        id: 2,
        isActive: false,
        value: "Раздел 2",
    },
    {
        id: 3,
        isActive: false,
        value: "Раздел 3",
    },
]
  return (
    <div className="wrapper">
      <h1>Menu App</h1>
      <Menu menuItems = {menuItemList} />
    </div>
  )
}

export default App;

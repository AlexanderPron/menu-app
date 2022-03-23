import React from "react";
import Menu from "./menu-components/Menu";
import Content from "./menu-components/Content";

function App() {
  const menuItemList = [
    {
      id: 1,
      isActive: false,
      value: "Раздел 1",
      target: "chapter1",
    },
    {
      id: 2,
      isActive: false,
      value: "Раздел 2",
      target: "chapter2",
    },
    {
      id: 3,
      isActive: false,
      value: "Раздел 3",
      target: "chapter3",
    },
  ];
  return (
    <div>
      <Menu menuItems={menuItemList} />
      <Content menuItems={menuItemList} />
    </div>
  );
}

export default App;

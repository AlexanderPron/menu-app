import React from "react";
import Menu from "./menu-components/Menu";
import Content from "./menu-components/Content";
import Chapter1 from "./menu-components/Chapter1";
import Chapter2 from "./menu-components/Chapter2";
import Chapter3 from "./menu-components/Chapter3";

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
      value: "Раздел 3. Графики",
      target: "chapter3",
    },
  ];

  return (
    <div>
      <Menu menuItems={menuItemList} />
      <Content menuItems={menuItemList}>
        <Route path='/' component={Main}/>
        <Route path='/report' component={Report}/>
        <Route path='/report/:id' component={Chapter}/>
      </Content>
    </div>
  );
}

export default App;

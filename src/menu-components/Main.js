import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Main() {
  let menuItemList = [
    {
      id: 1,
      isActive: false,
      value: "Итоговый отчет за 2021 год",
      target: "report",
      isChapterContent: false,
    },
    {
      id: 2,
      isActive: false,
      value: "Раздел 1",
      target: "chapter1",
      isChapterContent: true,
    },
    {
      id: 3,
      isActive: false,
      value: "Раздел 2",
      target: "chapter2",
      isChapterContent: true,
    },
    {
      id: 4,
      isActive: true,
      value: "Раздел 3. Графики",
      target: "charts",
      isChapterContent: true,
    },
  ];
  return (
    <div>
      <header>
        <Menu menuItems={menuItemList} />
      </header>

      <Outlet />

      <footer></footer>
    </div>
  );
}

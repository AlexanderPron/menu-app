import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  let menuItemList = [
    {
      id: 1,
      value: "Итоговый отчет за 2021 год",
      target: "report",
      isChapterContent: false,
    },
    {
      id: 2,
      value: "Раздел 1",
      target: "chapter1",
      isChapterContent: true,
    },
    {
      id: 3,
      value: "Раздел 2",
      target: "chapter2",
      isChapterContent: true,
    },
    {
      id: 4,
      value: "Раздел 3. Графики",
      target: "charts",
      isChapterContent: true,
    },
  ];
  return (
    <div>
      <Outlet />
    </div>
  );
}

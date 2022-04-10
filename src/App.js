import React, { useState } from "react";
import Main from "./menu-components/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import ReportMain from "./menu-components/ReportMain";
import ReportChapter1 from "./menu-components/ReportChapter1";
import ReportChapter2 from "./menu-components/ReportChapter2";
import ReportChart from "./menu-components/ReportChart";
import Menu from "./menu-components/Menu";

export default function App() {
  const [routeName, setRouteName] = useState("/");
  const menuItemList = [
    {
      id: 0,
      isActive: false,
      value: "XZ",
      target: "/",
      isChapterContent: false,
    },
    {
      id: 1,
      isActive: false,
      value: "Итоговый отчет за 2021 год",
      target: "/report",
      isChapterContent: false,
    },
    {
      id: 2,
      isActive: false,
      value: "Раздел 1",
      target: "/report/chapter1",
      isChapterContent: true,
    },
    {
      id: 3,
      isActive: false,
      value: "Раздел 2",
      target: "/report/chapter2",
      isChapterContent: true,
    },
    {
      id: 4,
      isActive: true,
      value: "Раздел 3. Графики",
      target: "/report/charts",
      isChapterContent: true,
    },
  ];
  let location = useLocation();
  React.useEffect(() => {
    setRouteName(location.pathname);
  }, [location.pathname]);
  return (
    <div>
      <div style={{ height: 100 }}>
        <Menu menuItems={menuItemList} routeName={routeName} />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="report" element={<ReportMain />} />
        <Route path="report/chapter1" element={<ReportChapter1 />} />
        <Route path="report/chapter2" element={<ReportChapter2 />} />
        <Route path="report/charts" element={<ReportChart />} />
      </Routes>
    </div>
  );
}

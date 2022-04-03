import React from "react";
import Main from "./menu-components/Main";
import { Routes, Route } from "react-router-dom";
import ReportMain from "./menu-components/ReportMain";
import ReportChapter1 from "./menu-components/ReportChapter1";
import ReportChapter2 from "./menu-components/ReportChapter2";
import ReportChart from "./menu-components/ReportChart";
import Homepage from "./menu-components/Homepage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="report" element={<ReportMain />} />
          <Route path="report/chapter1" element={<ReportChapter1 />} />
          <Route path="report/chapter2" element={<ReportChapter2 />} />
          <Route path="report/charts" element={<ReportChart />} />
        </Route>
      </Routes>
    </div>
  );
}

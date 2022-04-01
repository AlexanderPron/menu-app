import React from "react";
import { Routes, Route } from 'react-router-dom';
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

export default function Main() {
  return(
    <main>
      <h1>Главная страница</h1>
      <Routes>
        <Route path='/' component={Main}/>
        <Route path='/report' component={Chapter1}/>
        <Route path='/report/:id' component={Chapter2}/>
      </Routes>
    </main>
);
}

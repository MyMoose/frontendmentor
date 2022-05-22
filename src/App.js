import React from "react";
import { Routes, Route } from "react-router-dom"
import NavSite from "./components/navsite/NavSite";
import QrCode from "./components/qrcode/QrCode";
import ThreeColumnCard from "./components/threecolumncard/ThreeColumnCard";


function App() {
  return (
    <React.Fragment>
      <NavSite />

      <Routes>
        <Route path="/" ></Route>
        <Route path="/qrcode" element={<QrCode />}></Route>
        <Route path="/threecolumncard" element={<ThreeColumnCard />}></Route>
      </Routes>

    </React.Fragment>
  );
}

export default App;


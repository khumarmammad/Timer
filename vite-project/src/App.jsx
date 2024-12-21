import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="app-container">
      <header>
        <NavLink to="/timer" className="nav-link">Saat</NavLink>
        <NavLink to="/stopwatch" className="nav-link">Saniyəölçən</NavLink>
        <NavLink to="/" className="nav-link">Taymer</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
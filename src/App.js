import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home/Home";
import TopBar from "./components/common/TopBar/TopBar";
import Menu from "./components/common/Menu/Menu";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check if mouse moved or not, if not show navbar
    const handleMouseMove = () => {};
    window.addEventListener("mousemove", handleMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove, false);
    };
  }, []);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

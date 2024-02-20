import { useState } from "react";
import Home from "@/pages/Home/index.jsx";
import Footer from "@/components/Footer/index.jsx";
import Navigation from "@/components/Navigation/index.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

export default App;

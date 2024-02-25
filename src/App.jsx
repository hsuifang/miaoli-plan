import { Routes, Route, Outlet } from "react-router-dom";
import Home from "@/pages/Home/index.jsx";
import Footer from "@/components/Footer/index.jsx";
import Navigation from "@/components/Navigation/index.jsx";

import "./App.css";

const Layout = () => (
  <div className="md:h-[100vh] md:overflow-y-hidden">
    <Navigation />
    <main className="container mx-auto py-4 md:py-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<div>asdf</div>} />
      </Route>
    </Routes>
  );
}

export default App;

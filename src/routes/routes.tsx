import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Services from "../pages/serivices";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

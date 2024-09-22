import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../pages/home";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Services from "../pages/services";

function AppRoutes() {
  return (
    <HashRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default AppRoutes;

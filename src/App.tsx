import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#" element={<About />} />
        <Route path="/#" element={<Services />} />
        <Route path="/#" element={<Projects />} />
        <Route path="/#" element={<Contact />} />
      </Routes>
    </>
  );
}
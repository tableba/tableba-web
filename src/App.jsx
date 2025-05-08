import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Music from "./pages/Music";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App

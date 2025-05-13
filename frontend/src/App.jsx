import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Music from "./pages/Music";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App

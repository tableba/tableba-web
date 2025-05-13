import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects.jsx';
import NavBar from '../components/NavBar.jsx'
import Footer from "../components/Footer.jsx"

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>      
      <header
  className="flex relative h-screen z-10 transition-opacity duration-100"
  style={{
    opacity: 1 - (offsetY - 100) / 300,
    }}
      >

        <div className="absolute inset-0 -z-1"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}>
          </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 px-6">
        <NavBar />
          <section className="text-text_primary">
            <h1 className="hidden md:block text-6xl font-bold m-0">
              Antoine Geiger
            </h1>
            <div className="md:hidden flex flex-col items-start">
              <h2 className="text-[20px] font-bold">
                Hi, I’m
              </h2>
              <h1 className="text-[90px] max-[400px]:text-[80px] font-bold leading-none">
                Antoine
              </h1>
            </div>
          </section>

          {/* Links Options */}
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:text-base font-bold md:font-semibold list-none mt-1">
            <li>
              <a
                href="#projects-page"
                className="link-opt hover:bg-blue-500 active:bg-blue-600 hover:text-background"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <Link
                to="/music"
                className="link-opt hover:bg-accent_color active:bg-gray-200"
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="link-opt hover:bg-red-500 active:bg-red-600 hover:text-background"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main 
          className="relative z-10 overflow-hidden"
        style={{
          transform: `translateY(${offsetY * -1.1}px)`,
          }}
      >
      <Projects />
      </main>
      <footer className="z-20"
        style={{
          transform: `translateY(${offsetY * -1.1}px)`,
          }}
      >
      <Footer />
      </footer>

    </div>
  );
}

export default Home;

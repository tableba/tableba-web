import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <header className="flex relative h-screen z-10">
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 px-6">
          <NavBar />

          <section className="text-text_primary">
            <a href="https://tableba.com">
              <h1 className="hidden md:block 2xl:text-7xl md:text-6xl font-bold m-0">
                Antoine Geiger
              </h1>
            </a>

            <div className="md:hidden flex flex-col items-start">
              <h2 className="text-[20px] font-bold">Hi, I’m</h2>
              <h1 className="text-[90px] max-[400px]:text-[80px] font-bold leading-none">
                Antoine
              </h1>
            </div>
          </section>

          {/* Links Options */}
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:text-base font-bold md:font-semibold list-none mt-1">
            <li>
              <a
                href="#projects-start"
                className="link-opt hover:bg-accent_color active:bg-gray-200"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <Link
                to=""
                className="link-opt hover:bg-accent_color active:bg-gray-200"
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="link-opt hover:bg-accent_color active:bg-gray-200"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="relative z-10">
        <Projects />
      </main>

      <footer className="z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;


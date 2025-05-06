import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header>
        <nav className="">
          <Link to="/contact">Contact</Link>
          <Link to="/aboutme">About</Link>
        </nav>

        <div className="main-links-container">
          <section className="main-title">
            <h1 id="name">Antoine Geiger</h1>
            <div className="mobile-wrapper">
              <h2 id="hiim">Hi, I'm</h2>
              <h1 id="name-mobile">Antoine</h1>
            </div>
          </section>

          <ul className="options">
            <li><a href="#projects-page">PROJECTS</a></li>
            <li><Link to="/music">MUSIC</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="image-transition"></section>

        <div id="projects-page">
          <section className="project-card">
            <a href="https://github.com/tableba" target="_blank" rel="noopener noreferrer">
              Just look at my GitHub
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;

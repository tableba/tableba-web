import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Music() {

  useEffect(() => {
    const MUSIC_PATH = "/music/"

  }, [])

  return (
    <>
      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to
          <Link to="/contact">contact me</Link>
        </p>
        <div id="sound-div"></div>
      </main>

      <footer>
        <hr />
        <p>
          All sounds and music on this site are created by Antoine Geiger.
          <br />
          You are free to use them in your own projects—even commercially—as long as you credit me.
          <br />
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
        </p>
      </footer>
    </>
  );
}

export default Music;

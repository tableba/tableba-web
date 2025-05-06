import React from 'react';

function Music() {
  return (
    <>
      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to{' '}
          <a href="./contact.html">contact me</a>
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

      {/* If you need the script functionality, import or implement it in useEffect */}
    </>
  );
}

export default Music;

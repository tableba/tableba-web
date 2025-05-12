import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Music() {

  const [soundArray, setSoundArray] = useState([])

  useEffect(async () => {
    try {
      const response = await fetch("localhost:4003/api/sounds")
      const data = await response.json()
      setSoundArray(data)
      console.log(soundArray)
    } catch (err) {
      console.error(`Fetch error: ${err}`)
    }

  }, [])

  return (
    <div className="font-[Noto]">
      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to <Link className="text-blue-800 hover:text-blue-900 hover:cursor-pointer underline" to="/contact">contact me</Link>
        </p>
        <div id="sound-div">
          
          <audio controls>
            
          <source src="/music/assets/martin_garrish.wav" type="audio/wav"/>
          </audio>
        </div>
      </main>

      <footer>
        <hr />
        <p>
          All sounds and music on this site are created by Antoine Geiger.
          <br />
          You are free to use them in your own projects—even commercially—as long as you credit me.
          <br />
          <a className="text-blue-800 hover:text-blue-900 hover:cursor-pointer underline" href="https://creativecommons.org/licenses/by/4.0/">
            Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Music;

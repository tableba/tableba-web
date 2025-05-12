import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Music() {

  const MUSICPATH = "/music/sounds.json"
  const [soundArray, setSoundArray] = useState([])

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(MUSICPATH)
        const data = await response.json()
        setSoundArray(data)
      } catch (err) {
        console.error(`Fetch error: ${err}`)
      }
    }
    fetchMusic()
  }, [])

  useEffect(() => {
    console.log(soundArray)
  }, [soundArray])

function getMimeType(filePath) {
    const extension = filePath.split('.').pop().toLowerCase(); // Extract file extension
    const mimeTypes = {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'flac': 'audio/flac'
    };

    return mimeTypes[extension] || 'audio/mpeg'; // Default to mp3 if unknown
}

  return (
    <div className="font-[Noto]">
      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to <Link className="text-blue-800 hover:text-blue-900 hover:cursor-pointer underline" to="/contact">contact me</Link>
        </p>
        <div id="sound-div">
          {
            soundArray.map(soundUrl => (
              <>
                <h1>{soundUrl.split("/")[2].split(".")[0]}</h1>
                <audio controls>
                  <source src={soundUrl} type={getMimeType(soundUrl)}/>
                </audio>
              </>
            ))
          }
          
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

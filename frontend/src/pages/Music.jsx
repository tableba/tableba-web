import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/default_html.module.css'
import MusicSection from '../components/MusicSection.jsx'


function Music() {

  const MUSICPATH = "/music/sounds.json"
  const [loopsArray, setLoopsArray] = useState([])
  const [musicArray, setMusicArray] = useState([])
  const [miscArray, setMiscArray] = useState([])

  // fetch sounds.json
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(MUSICPATH)
        const data = await response.json()

        const loopsArrayTemp = []
        const musicArrayTemp = []
        const miscArrayTemp = []

        // map to music type based on file name
        data.forEach(soundUrl => {
          const fileName = soundUrl.split("/")[2]

          if (fileName.includes("GL")) {
            loopsArrayTemp.push(soundUrl)
          }
          else if (fileName.includes("ML")) {
            musicArrayTemp.push(soundUrl)
          }
          else {
            miscArrayTemp.push(soundUrl)
          }
        });

        setLoopsArray(loopsArrayTemp)
        setMusicArray(musicArrayTemp)
        setMiscArray(miscArrayTemp)

      } catch (err) {
        console.error(`Fetch error: ${err}`)
      }
    }
    fetchMusic()
  }, [])

  return (
    <div className="m-3 font-[Noto]">

      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to <a className="anchor" href="/contact.html">contact me</a>
        </p>
        <div className="" id="sound-div">
          <MusicSection title="Loops" sounds={loopsArray} />
          <MusicSection title="Music" sounds={musicArray} />
          <MusicSection title="Misc" sounds={miscArray} />

        </div>
      </main>


      <footer>
        <hr className="text-darkgray mb-2 mt-2" />
        <p>
          All sounds and music on this site are created by Antoine Geiger.
          <br />
          You are free to use them in your own projects—even commercially—as long as you credit me.
          <br />
          <a className="anchor" href="https://creativecommons.org/licenses/by/4.0/">
            Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Music;

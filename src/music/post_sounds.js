import fs from "fs/promises"
import path from "path"

const AUDIO_DIR = "./src/music/assets"
const JSON_FILE_OUTPUT = "./src/music/sounds.json"

readSouds(AUDIO_DIR)

async function readSouds(audioDir) {
  try {
    const audioFiles = await fs.readdir(audioDir)
    for (let sound of audioFiles) {
      console.log(sound)
    }
  } catch (err) {
    console.error(err)
  }
}

import fs from "fs/promises"
import path from "path"
import { JSDOM } from "jsdom"

const AUDIO_DIR = "./src/music/assets"
const RELATIVE_OUTPUT_DIR = "./music/assets"
const OUTPUT_FILE = "./src/music/sounds.json"

async function main() {
  try {
    const soundArray = await readSouds(RELATIVE_OUTPUT_DIR, AUDIO_DIR)
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(soundArray, null, ), 'utf8');
    console.log(`Sound file contents from ${AUDIO_DIR} written to ${OUTPUT_FILE} successfully.`)
  } catch (err) {
    console.log(err)
  }
}

async function readSouds(outputDir, audioDir) {
  let files = []
  try {
    const audioFiles = await fs.readdir(audioDir)
    for (let soundPath of audioFiles) {
      const filePath = path.join(outputDir, soundPath)
      files.push(filePath)
    }
    return files
  } catch (err) {
    console.error(err)
  }
}

await main()

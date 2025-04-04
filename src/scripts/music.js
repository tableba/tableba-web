const SOUND_FILE_PATH = "https://tableba.com/src/music/sounds.json"

document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetchData(SOUND_FILE_PATH)
  renderSounds(result)
})

function renderSounds(soundArr) {
  let soundDiv = document.getElementById("sound-div")
  let frag = document.createDocumentFragment()
  for (let sound of soundArr) {
    let audio = document.createElement("audio")
    let audioCard = document.createElement("section")
    audioCard.classList.add("audio-card")
    audio.controls = true

    const mime = getMimeType(sound)

    const title = document.createElement("h4")
    title.innerText = sound.split("/")[2].split(".")[0]

    let source = document.createElement("source")
    source.src = sound
    source.type = mime

    audio.appendChild(source)
    audioCard.appendChild(title)
    audioCard.appendChild(audio)
    frag.appendChild(audioCard)
  }
  soundDiv.appendChild(frag)
}

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

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

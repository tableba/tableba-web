const response = fetchMarkdown("textbox.md")

async function fetchMarkdown(url) {
  const fetchResponse = await fetch(url)
  const data = await fetchResponse.text()
  console.log(data)
}

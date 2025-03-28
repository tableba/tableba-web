const response = fetchMarkdown("https://tableba.com/textbox.md")


async function fetchMarkdown(url) {
  const fetchResponse = await fetch(url)
  const data = await fetchResponse.text()
  var converter = new showdown.Converter(),
    text      = `${data}`,
    html      = converter.makeHtml(text);
  return html
}

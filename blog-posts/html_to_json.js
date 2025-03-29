import fs from "fs/promises"
import path from "path"

async function main() {
  try {
    const HTML_DIR = "./blog-posts/html-blog-files"
    const OUTPUT_FILE = "./blog-posts/blog_posts.json"

    const htmlJsonContent = await htmlToJson(HTML_DIR)
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(htmlJsonContent, null, 2), 'utf8');
    console.log(`HTML file contents from ${HTML_DIR} written to ${OUTPUT_FILE} successfully.`)
  } catch (err) {
    console.log(err)
  }
}

async function htmlToJson(htmlDir) {
  let htmlContents = []
  try {
    const htmlFiles = await fs.readdir(htmlDir)
    // reading content of each file
    for (let index in htmlFiles) {
      const filePath = path.join(htmlDir, htmlFiles[index])
      const content = await fs.readFile(filePath, 'utf-8')
      const stats = await fs.stat(filePath)
      htmlContents.push({
        "id": parseInt(index),
        "title": "",
        "description": "",
        "content": content,
        "author": "Antoine Geiger",
        "createdOn": stats.birthtime,
        "lastModified": stats.mtime
      })
    }
  return htmlContents
  } catch (err) {
    console.error(err)
  }
}

await main()

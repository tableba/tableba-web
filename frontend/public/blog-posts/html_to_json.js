import fs from "fs/promises"
import path from "path"
import { JSDOM } from "jsdom"

async function main() {
  try {
    const HTML_DIR = "./public/blog-posts/blog-files"
    const OUTPUT_FILE = "./public/blog-posts/blog_posts.json"

    const htmlJsonContent = await htmlToJson(HTML_DIR)
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(htmlJsonContent, null, ), 'utf8');
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
      const vitePath = filePath.replace(/^public\//, '');

      //file content
      const content = await fs.readFile(filePath, 'utf-8')
      
      //reading <title> and <summary> inside the html file
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const summary = document.querySelector('meta[name="summary"]').getAttribute("content");
      const title = document.querySelector('meta[name="title"]').getAttribute("content");

      //file stats
      const stats = await fs.stat(filePath)

      htmlContents.push({
        "id": parseInt(index),
        "title": title,
        "description": summary,
        "content": content,
        "author": "Antoine Geiger",
        "path": vitePath,
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

import fs from "fs/promises"
import path from "path"
import { JSDOM } from "jsdom"

async function main() {
  try {
    const DNS_NAME = "https://tableba.com"
    const HTML_DIR = "./blog-posts/html-blog-files"
    const OUTPUT_FILE = "./blog-posts/blog_posts.json"

    const htmlJsonContent = await htmlToJson(HTML_DIR, DNS_NAME)
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(htmlJsonContent, null, ), 'utf8');
    console.log(`HTML file contents from ${HTML_DIR} written to ${OUTPUT_FILE} successfully.`)
  } catch (err) {
    console.log(err)
  }
}

async function htmlToJson(htmlDir, dns) {
  let htmlContents = []
  try {
    const htmlFiles = await fs.readdir(htmlDir)
    // reading content of each file
    for (let index in htmlFiles) {
      const filePath = path.join(htmlDir, htmlFiles[index])

      //url of the file using the dns name
      const url = path.join(dns, filePath).replace("https:/", "https://")

      //file content
      const content = await fs.readFile(filePath, 'utf-8')
      
      //reading <title> and <summary> inside the html file
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const title = document.querySelector("header h1").textContent;
      const summary = document.querySelector("header summary").textContent;

      //file stats
      const stats = await fs.stat(filePath)

      htmlContents.push({
        "id": parseInt(index),
        "title": title,
        "description": summary,
        "content": content,
        "author": "Antoine Geiger",
        "url": url,
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

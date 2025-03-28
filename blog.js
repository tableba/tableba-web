document.addEventListener("DOMContentLoaded", async () => {
  // const BLOG_POSTS = await fetchData("https://tableba.com/blog_posts.json")
  // console.log(BLOG_POSTS)
  // renderBlogPostCovers(BLOG_POSTS)
})

function renderBlogPostCovers(blog_posts) {
  const blog_container = document.getElementById("blog_container")
  const frag = document.createDocumentFragment()

  blog_posts.forEach(post => {
    console.log(post)
    const blog_card = document.createElement("section")
    blog_card.classList.add("blog_card")

    const title = document.createElement("h2")
    title.innerText = post.title
    blog_card.appendChild(title)

    const content = document.createElement("p")
    content.innerText = post.content
    blog_card.appendChild(content)

    frag.appendChild(blog_card)
  })

  blog_container.appendChild(frag)
}

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


// Example function to convert Markdown and insert it into the page
function renderMarkdown(markdownText, outputElementId) {
  var converter = new showdown.Converter();
  var html = converter.makeHtml(markdownText);
  document.getElementById(outputElementId).innerHTML = html;
}

var markdownContent = `
# Welcome to My Blog
This is a **Markdown** blog post.

- Item 1
- Item 2
- Item 3
`;

renderMarkdown(markdownContent, "blog-content");

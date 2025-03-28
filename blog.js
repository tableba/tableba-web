document.addEventListener("DOMContentLoaded", async () => {
  const BLOG_POSTS = await fetchData("https://tableba.com/blog_posts.json")
  console.log(BLOG_POSTS)
  renderBlogPostCovers(BLOG_POSTS)
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

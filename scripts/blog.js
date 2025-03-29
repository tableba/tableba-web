document.addEventListener("DOMContentLoaded", async () => {
  const BLOG_POSTS = await fetchData("https://tableba.com/blog-posts/blog_posts.json")
  console.log(BLOG_POSTS)
  // renderBlogPostCovers(BLOG_POSTS)
})

function renderBlogPostCovers(blogPosts) {
  const blogContainer = document.getElementById("blog-container")
  const frag = document.createDocumentFragment()

  blogPosts.forEach(post => {
    console.log(post)
    const blogCard = document.createElement("section")
    blogCard.classList.add("blog-card")

    const title = document.createElement("h2")
    title.innerText = post.title
    blogCard.appendChild(title)

    const content = document.createElement("p")
    content.innerText = post.content
    blogCard.appendChild(content)

    frag.appendChild(blogCard)
  })

  blogContainer.appendChild(frag)
}

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

document.addEventListener("DOMContentLoaded", async () => {
  const BLOG_POSTS = await fetchData("https://tableba.com/src/blog-posts/blog_posts.json")
  renderBlogPostCovers(BLOG_POSTS)
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
    content.innerText = post.description
    blogCard.appendChild(content)

    frag.appendChild(blogCard)

    //listen for a click on the blog card
    blogCard.addEventListener('click', () => {
      //redirect to that post
      window.location.assign(post.url)
    })
  })

  blogContainer.appendChild(frag)
}

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

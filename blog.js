document.addEventListener("DOMContentLoaded", async () => {
  const blog_cards = document.querySelectorAll(".blog_card")
  const BLOG_POSTS = await fetchData("./blog_posts.json")
  console.log(BLOG_POSTS)
})

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

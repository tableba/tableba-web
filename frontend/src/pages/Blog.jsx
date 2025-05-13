import React, { useEffect, useState } from 'react';

function Blog() {
  
  const BLOG_PATH = '/blog-posts/blog_posts.json'

  const [blogFilesJson, setBlogFilesJson] = useState([])

  useEffect(() => {
    const fetchBlogFiles = async () => {
      try {

        const response = await fetch(BLOG_PATH)
        const data = await response.json()
        setBlogFilesJson(data)
      } catch (err) {
        console.error(`Fetch Error: ${err}`)
      }
    }
    fetchBlogFiles()
  }, [])

  return (
    <div className="font-[Noto]">
      <h3>Blog Postz:</h3>
      <main className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-1 " id="blog-container">
          {
            blogFilesJson ? (
              blogFilesJson.map(blogFile => (
                <div
                  key={blogFile.path}
                  className="inline-block m-3 p-3 border border-text_primary md:hover:bg-accent_color md:active:bg-gray-200 transition duration-200"

                  // redirect to the blog file when clicked
                  onClick={() => {window.location.href = `/${blogFile.path}`}}>

                  <h2 className="font-bold mb-1 italic">{blogFile.title}</h2>
                  <p>{blogFile.description}</p>
                </div>
              ))
            ) : (
                <h3>Blog not found...</h3>
              )
          }

        </div>
      </main>

      {/* blog.js script functionality would ideally be migrated to React logic or useEffect */}
    </div>
  );
}

export default Blog;

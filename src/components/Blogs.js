import React from "react";
import Blog from "./Blog";
import "../styles/blogs.css";


function Blogs({blogs, blogsPerPage}) {

  const blogCard = blogs.slice(0, blogsPerPage).map(blog=>{
    return <Blog key={blog.id} blog={blog}/>
  })
  
  return (
    <div className="blogs--container">
      {blogCard}
    </div>
  );
}

export default Blogs;

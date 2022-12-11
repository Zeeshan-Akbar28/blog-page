import React from "react";
import Blogs from "../components/Blogs";
import FeaturedBlog from "../components/FeaturedBlog";
import { useState } from "react";
import Hero from "../components/Hero";
import "../styles/main.css";

function BloogHome({ blogs }) {
  const blogsPerPage = 6;
  const [next, setNext] = useState(blogsPerPage);
  function handleMore() {
    setNext(next + blogsPerPage);
  }
  return (
    <div className="main--container">
      <Hero />
      <FeaturedBlog blogs={blogs} />
      <Blogs blogs={blogs} blogsPerPage={next} />
      <button className="btn--primary" onClick={handleMore}>
        Load More
      </button>
    </div>
  );
}

export default BloogHome;

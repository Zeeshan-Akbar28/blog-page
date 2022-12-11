import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import { useDispatch, useSelector } from "react-redux";

function Blog({ blog }) {
  const dispatch = useDispatch();

  const views = useSelector((state) => state);
  const [view] = views?.filter((obj) => obj.id === blog.id);

  return (
    <div className="blog--card">
      <div className="blog--img">
        <Link to={`/blog/${blog.id}`}>
          <img
            src={blog.Image}
            alt="img"
            onClick={() => {
              dispatch({ type: "id", payLoad: blog.id });
            }}
          />
        </Link>
      </div>
      <div className="blog--text">
        <div className="img--caption">
          <p className="caption--text ">Posted on October 6th 2021</p>
          <p className="caption--text viewIcon">
            <i className="fa fa-eye"></i>
            {view?.count || 0} {view?.count === 1 ? "view" : "views"}
          </p>
        </div>
        <h1 className="blog--heading heading--h6">{blog.Title}</h1>
        <p className="blog--description body--2">{blog.Subtitle}</p>
      </div>
    </div>
  );
}

export default Blog;

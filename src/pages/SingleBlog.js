import React from "react";
import "../styles/singleblog.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function SingleBlog({ blogs }) {
  const { blog_id } = useParams();
  const blogPage = blogs?.filter((blog) => blog?.id === blog_id).pop();

  const views = useSelector((state) => state);
  const view = views?.filter((obj) => obj.id === blog_id).pop();

  return (
    <div className="main--container">
  
      <div className="blog--header--content">
        <div className="featured--caption">
          <p className="body--2">Posted on October 6th 2021</p>
          <p className="body--2">
            <i className="fa fa-eye"></i> {view?.count || 0} {view?.count === 1 ? 'view': 'views'}
          </p>
        </div>
        <h4 className="heading--h4">{blogPage?.Title}</h4>
        <p className="body--2">{blogPage?.Subtitle}</p>
      </div>

      <div className="single--blog--img">
        <img src={blogPage.Image} alt="img" />
      </div>

      <div className="singl--blog--content">
        <h5 className="heading--h5">{blogPage?.Title}</h5>
        <p className="body--2">{blogPage?.Article}</p>
        <p className="body--2">{blogPage?.Article}</p>
        <img className="blog--sub--img" src={blogPage.Image} alt='img'/>
        <h5 className="heading--h6">{blogPage?.Title}</h5>
        <p className="body--2">{blogPage?.Article}</p>
        <p className="blockquote">{blogPage?.Subtitle}</p>
        <p className="body--2">{blogPage?.Article}</p>
      </div>
    </div>
  );
}

export default SingleBlog;

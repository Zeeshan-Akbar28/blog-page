import React from "react";
import { Link } from "react-router-dom";
import "../styles/featuredblog.css";
import { useDispatch, useSelector } from "react-redux";

function FeaturedBlog({ blogs }) {
 
  const dispatch = useDispatch();
  const featured = blogs?.filter((blog) => blog?.id === "45").pop();
  const views = useSelector((state) => state);
  const view = views?.filter((obj) => obj.id === '45').pop();

  return (
    <div className="featured--blog--container">
      <div className="featured--blog">
        <img className="featured--img" src={featured?.Image} alt="img" />

        <div className="featured--content--container">
          <div className="featured--caption">
            <p className="body--2">Posted on October 6th 2021</p>
            <p className="body--2">
              <i className="fa fa-eye"></i> {view?.count || 0} {view?.count === 1 ? 'view': 'views'}
            </p>
            <p className="body--2 featured--tab">Featured</p>
          </div>
          <h4 className="heading--h4">{featured?.Title}</h4>
          <p className="body--2">{featured?.Subtitle}</p>
          <Link to={`/blog/${featured?.id}`}>
            <p className="body--1 read--more"  onClick={() => {
              dispatch({ type: "id", payLoad: '45' });
            }}>Read More &#10230;</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import Rating from "../../assets/icons/Rating.svg";
import moment from "moment";
import "./jobItem.css";

export const JobItem = ({ post }) => {
  let [postSave, setPostSave] = useState(false);
  const posted = moment(post.createdAt).format("DD MMM, YYYY");

  return (
    <li className="job__content">
      <div className="job__pictures">
        <img className="job__img" src={post.pictures[0]} alt="pictures" />
      </div>
      <div className="job__info">
        <div>
          <Link
            key={post.id}
            to={`/job-details/${post.id}`}
            state={{ id: post.id }}
          >
            {" "}
            <h3 className="job__title">{post.title}</h3>{" "}
          </Link>
          <p className="job__name">{post.name}</p>
          <address className="job__address">
            <IoMdPin />
            {post.address}
          </address>
        </div>
        <div className="job__post">
          <BsFillBookmarkFill
            onClick={() => setPostSave((postSave = !postSave))}
            className={`job__icon-save icon-none ${postSave && "active"}`}
          />
          <img className="job__post-rating" src={Rating} alt="Rectangle" />
          <p className="job__post-create">Posted {posted}</p>
        </div>
      </div>
    </li>
  );
};

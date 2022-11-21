import React from "react";
import { JobItem } from "../JobItem/JobItem";
import "./jobList.css";



export const JobList = ({ posts }) => {
  return (
    <>
    <div className="wrapper">
      {posts && (
        <ul className="job">
          {posts.map((post) => 
           <JobItem key={post.id} post={post} />
          )}
        </ul>
      )}
      </div>
    </>
  );
};

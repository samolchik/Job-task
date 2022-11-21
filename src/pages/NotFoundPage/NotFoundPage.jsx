import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      This page doesn't exist! {" "}
      <Link to="/">
        {" "}
        <button className="goHome">Go Home</button>
      </Link>{" "}
    </div>
  );
};


import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, JobDetails, NotFoundPage } from "./pages";

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

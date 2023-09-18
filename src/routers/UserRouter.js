import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import LayoutHome from "../layout/LayoutHome";
import Authentication from "../pages/Authentication";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutHome />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/authentication" element={<Authentication />} />
    </Routes>
  );
};

export default UserRouter;

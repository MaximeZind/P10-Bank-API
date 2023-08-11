import React from "react";
import Nav from "../components/baselayout/Nav";
import Footer from "../components//baselayout/Footer";
import { Outlet } from "react-router-dom";

function BaseLayout() {
    return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    );
  }
  export default BaseLayout;
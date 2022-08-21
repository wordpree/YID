import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BgVid from "./BgVid";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper1">
      <BgVid />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

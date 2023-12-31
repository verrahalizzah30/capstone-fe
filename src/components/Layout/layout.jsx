/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Footer/footer.jsx";
import Routes from "../../routes/routers";
import Navbar from "../Navbar/navbar.jsx";
import Download from "../Download/download.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes />
      </div>
      <Download />
      <Footer />
    </div>
  );
};

export default Layout;

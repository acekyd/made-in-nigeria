import * as React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Made in Nigeria"
        meta={[
          {
            name: "description",
            content:
              "A curation of awesome open source tools built by Nigerians for the world.",
          },
        ]}
      />
      <NavBar />
      <div className="mainBody">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import * as React from "react";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <div
      style={{
        background: "#f4f4f4",
        paddingTop: "10px",
      }}
    >
      <ul>
        <li>
          <Link to="/">Hjiyoyoiome</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">Tested</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
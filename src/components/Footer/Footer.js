/**
 * @FileName: Footer
 * @Description: Every Saint has a past, every sinner has a future..
 * @Author: Lance
 * @Date: 2021/12/26 17:24
 */

import React from "react"
import "./Footer.css"
import {Link} from "@material-ui/core";

const Footer = ({LightTheme}) => {
  return (
    <div className="footer" style={{
      backgroundColor: LightTheme ? "#fff" : "#0a1929",
      color: !LightTheme ? "#fff" : "#000",
    }
    }>
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/Lan-ce-lot" target="__blank">
          Lancel
        </a>.
      </span>
      <span  className="name">
        Inspired by Roadside Coder.
      </span >
      <span  className="name">
        MIT License.
      </span>
    </div>
  );
};

export default Footer;

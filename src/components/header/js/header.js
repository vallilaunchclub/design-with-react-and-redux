import React from "react";
import "../styles/header.scss";
import Brand from "./brand";
import Search from "./search";
import Menu from "./menu";

function header() {
  return (
    <div className="header">
      <div className="header-components">
        <Brand/>
        <Search/>
        <Menu/>
      </div>
    </div>
  );
}

export default header;

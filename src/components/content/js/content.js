import React from "react";
import Name from "./name";
import Rankings from "./rankings";

import Menu from "./menu";
import SubPage from "./subpage";

function content(props) {
  console.log(props)
  return (
    <div className="content">
      <div className="content-components">
        <Name/>
        <Rankings/>
        <Menu/>
        <SubPage/>
        
      </div>
    </div>
  );
}

export default content;

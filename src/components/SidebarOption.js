import React from "react";
import "./sidebarOption.css"

function SidebarOption(props) {
  return (
    <div className={`sidebarOption ${props.active&&"sidebarOption--active"}`}>
      {props.Component}
      <h2>{props.text}</h2>
    </div>
  );
}

export default SidebarOption;

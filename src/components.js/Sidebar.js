import React from "react";
import "../component.css/Sidebar.css";

function Sidebar(props) {
  let drawerClasses = "sideBar";
  if (props.show) {
    drawerClasses = "sideBar open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

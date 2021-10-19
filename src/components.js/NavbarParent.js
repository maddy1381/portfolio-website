import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop.js";
import Navbar from "./Navbar.js";

export class NavbarParent extends Component {
  state = {
    sidebarOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidebar show={this.state.sidebarOpen} />
        {backdrop}
      </div>
    );
  }
}

export default NavbarParent;

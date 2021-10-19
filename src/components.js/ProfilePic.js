import React, { Component } from "react";
import "../component.css/ProfilePic.css";
import profile from "../pfp2-compressed.png";

class ProfilePic extends Component {
  render() {
    return (
      <div className="parent">
        <div className="pfp">
          <img src={profile} alt="Profile Pic" loading="lazy" />
        </div>
      </div>
    );
  }
}

export default ProfilePic;

import React, { Component, Suspense } from "react";
import ProfilePic from "./ProfilePic";
import IntroRight from "./IntroRight";
import "../component.css/FirstSection.css";

class FirstSection extends Component {
  render() {
    return (
      <div className="first-section">
        <IntroRight />
        {/* <ProfilePic /> */}
        {/* <Canvas>
          <Suspense fallback={null}>

          </Suspense>
        </Canvas> */}
      </div>
    );
  }
}

export default FirstSection;

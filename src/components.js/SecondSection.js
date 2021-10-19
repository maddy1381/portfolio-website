import React, { Component } from "react";
import "../component.css/SecondSection.css";
import SecondLeft from "./SecondLeft";
import SecondRight from "./SecondRight";

class SecondSection extends Component {
  render() {
    return (
      <>
        <div className="second-section">
          <SecondRight />
          <SecondLeft />
        </div>
      </>
    );
  }
}

export default SecondSection;

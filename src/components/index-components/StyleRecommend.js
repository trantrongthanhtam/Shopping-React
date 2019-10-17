import React from "react";
import ImageSeries from "./ImageSeries";

class StyleRecommend extends React.Component {
  render() {
    return (
      <div className="style-recommend">
        <p
          style={{
            marginTop: "40px",
            letterSpacing: "2.8px",
            fontSize: "14px",
            fontFamily: "utm-avo-bold",
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          GỢI Ý PHONG CÁCH
        </p>
        <ImageSeries></ImageSeries>
      </div>
    );
  }
}

export default StyleRecommend;

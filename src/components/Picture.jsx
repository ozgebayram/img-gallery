import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="container">
      <div className="picture">
        <div className="imgDiv">
          <img src={data.src.large} alt="ozge" />
        </div>
        <div className="infoPhoto">
          <p>{data.photographer}</p>
        </div>
      </div>
    </div>
  );
};
export default Picture;
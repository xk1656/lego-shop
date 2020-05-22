import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ imageUrl, size, titleImg, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={`${size} content`}>
      <div
        className="title-image"
        style={{ backgroundImage: `url(${titleImg})` }}
      />
    </div>
  </div>
);

export default withRouter(MenuItem);

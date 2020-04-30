import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Harry Potter™</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jurassic World™</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">LEGO® Marvel</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Technic™</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">City</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

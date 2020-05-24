import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({
  items,
  routeName,
  themeTitleBg,
  themeTitleImg,
}) => (
  <div className="collection-preview">
    <div className="theme-title">
      <div
        className="theme-title-img"
        style={{
          backgroundImage: `url(${themeTitleBg})`,
        }}
      >
        <a href={`/shop/${routeName}`}>
          <img src={themeTitleImg} alt="item" />
        </a>
      </div>
    </div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

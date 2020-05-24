import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import { ReactComponent as Next } from "../../assets/next.svg";

const CollectionPage = ({ collection }) => {
  const { title, items, themeTitleImg, themeTitleBg } = collection;
  return (
    <div className="collection-page">
      <div className="Breadcrumbs">
        <ol>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
            <Next />
          </li>
          <li>
            <a href="/shop">
              <span>Theme</span>
            </a>
            <Next />
          </li>
          <li>
            <span>{title}</span>
          </li>
        </ol>
      </div>
      <div className="theme-title">
        <div
          className="theme-title-img"
          style={{
            backgroundImage: `url(${themeTitleBg})`,
          }}
        >
          <img src={themeTitleImg} alt="item" />
        </div>
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Next } from "../../assets/next.svg";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    <div className="Breadcrumbs">
      <ol>
        <li>
          <a href="/">
            <span>Home</span>
          </a>
          <Next />
        </li>
        <li>
          <span>Theme</span>
        </li>
      </ol>
    </div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

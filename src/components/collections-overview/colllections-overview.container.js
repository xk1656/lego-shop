import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../with-spinner/with-spinner";
import collectionsOverview from "./collections-overview";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionsOverview);

export default CollectionOverviewContainer;

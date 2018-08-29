import React from "react";
import { connect } from "react-redux";
import {
  fetchVenues,
  focusVenue
} from "../../redux/actions/actions.js";
import Venues from "../presentational/venues.js";

const mapStateToProps = (state, ownProps) => ({
  valid: state.search.valid,
  venues: state.search.venues,
  url: ownProps,
  alias: state.focusVenue.alias,
  current: false
});

const mapDispatchToProps = dispatch => ({
  fetchVenues: (type, search) => {
    dispatch(fetchVenues(type, search));
  },
  focusVenue: (index, alias) => {
    console.log("venues called", index, alias);
    dispatch(focusVenue(index, alias));
  }
});

const venuesLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Venues);

export default venuesLink;

import React from "react";
import { connect } from "react-redux";
import {
  fetchVenues,
  focusVenue,
  fetchVenueProfile
} from "../../redux/actions/actions.js";
import Venue from "../presentational/venue.js";

const mapStateToProps = (state, ownProps) => ({
  venue: state.search.venues[state.focusVenue.index],
  urlsearch: ownProps.urlsearch,
  current: true,
  index: state.focusVenue.index
});

const mapDispatchToProps = dispatch => ({
  fetchVenueProfile: alias => dispatch(fetchVenueProfile(alias)),
  fetchVenues: (type, search) => {
    dispatch(fetchVenues(type, search));
  },
  focusVenue: (index, alias) => {
    dispatch(focusVenue(index, alias));
  }
});

const venueLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Venue);

export default venueLink;

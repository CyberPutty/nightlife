import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import AllVenuesContainer from "./components/container/allVenuesContainer";
import VenueContainer from "./components/container/venueContainer";
import { Router, Route, Switch} from "react-router";
import { BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import Venue from './components/presentational/venue';
// app container contains the main component--->venueContainer-->


const App = ({venues,selected}) => {
 
  // new method venue should return results based on url search and not rely on index... should search to see if it is in the current state else grab from yelp.

  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={AllVenuesContainer}/>
    <Route path="/:alias?" render={(props)=><VenueContainer urlsearch={props.match.params.alias}/>}/> 
    </Switch>
    </BrowserRouter>
  );
};


const mapStateToProps = (state, ownProps) => ({
  selected: state.focusVenue.index,
  venues: state.search.venues,
 
});

const mapDispatchToProps = dispatch => ({

});



export default connect(mapStateToProps,mapDispatchToProps)(App);

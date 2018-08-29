import React from "react";
import { connect } from "react-redux";
import { fetchVenues } from "../redux/actions/actions";
class nav extends React.Component {
  render() {
    return (
      <div className="grid-nav">
        <h1 className="nav-item">Nightlife</h1>
        <div>
          <button onClick={()=>this.props.fetchVenues('search','pasta')}>click</button>
        </div>
        <h1 className="nav-item login">login</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchVenues: (type,search) => {
    dispatch(fetchVenues(type,search));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(nav);

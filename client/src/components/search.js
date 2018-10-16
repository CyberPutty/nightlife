import React from "react";
import { connect } from "react-redux";
import { fetchVenues } from "../redux/actions/actions";
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
        };
  }
stopSubmit=(e)=>{
e.preventDefault();
}
handleInput=(event)=>{
this.setState({input: event.target.value});

}
  render() {
    return (<div className="search">
    <form onSubmit={this.stopSubmit}>
      <input placeholder="text" onInput={this.handleInput}/>
      <button onClick={()=>this.props.fetchVenues('search',this.state.input)}>search</button> 
      </form>  
    </div>)
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
)(Search);

import React from "react";
import "../../componentCSS/starStyle.css";

const star = rating => {
  let count = rating;
  const arr = [];
  for (let i = 0; i < rating; i++) {
    if (count < 1) {
      arr.push("half");
      count--;
    } else {
      arr.push("whole");
      count--;
    }
  }
  return arr;
};
class Venue extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.urlsearch) {
      console.log(this.props.urlsearch);
      if (!this.props.venue) {
        this.props.fetchVenues("business", this.props.urlsearch.toString());
      }
    }
  }

  render() {
    if (this.props.venue) {
      console.log(this.props.venue);
      return (
        <div className="grid-venue">
          <img src={this.props.venue.image_url} />
          <h3>{this.props.venue.name}</h3>
          <div>
            <h3>
              Address:
              {this.props.venue.location.display_address[0]}
              <br />
              {this.props.venue.location.display_address[1]}
            </h3>
            <h4>
              Rating:
              <ul>
                {star(this.props.venue.rating).map(function(item) {
                  if (item === "whole") {
                    return <li className="full-star">&#9733;</li>;
                  }
                  return <li className="full-star half-star">&#9733;</li>;
                })}
              </ul>
            </h4>
            <p>&#9786;</p>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default Venue;

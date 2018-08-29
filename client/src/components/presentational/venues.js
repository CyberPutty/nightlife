import React from "react";
import cat from "../../images/cat.jpg";
import { Link } from "react-router-dom";
import Venue from "./venue";
import connect from "react-redux";
const Venues = ({focusVenue ,venues, current }) => {
  return (
    <div className="grid-mid">
      {venues.map(function(item, index) {
        return (
          <div>
            <Venue venue={item} current={current} />
            <Link to={'/' + item.alias} onClick={()=>{focusVenue(index,item.alias)}}>
            Details
         </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Venues;

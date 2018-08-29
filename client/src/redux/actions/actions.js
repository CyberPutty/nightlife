const searchStarted = query => ({
  type: "SEARCH_STARTED",
  query
});

const searchResults = (query, resp) => {
  return {
    type: "SEARCH_RESULTS",
    venues: resp,
    query,
    searchedOn: Date.now()
  };
};

export const fetchVenues = (type,search) => {
  // reusable for yel api type being passed in
console.log(type);
  // type : search, business
  return dispatch => {
    dispatch(searchStarted(search));
    let body = { type: type, search: search, location: "san francisco, ca" };
    return fetch("/venues/search", {
      credentials: "same-origin",
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const results = data.businesses;
        dispatch(searchResults(search, results));
      })
      .catch(function(error) {
        console.log("Looks like there was a problem: \n", error);
      });
  };
};

export const fetchVenueProfile = alias => {
  return {
    type: "VENUE_PROFILE",
    venue: {},
    meetups: [],
    comments: []
  };
};

export const focusVenue = (index, alias) => {

// if index is in state return index else return dispatch request for alias. thunk needs to handle the request.
  return {
    type: "FOCUS_VENUE",
    index,
    alias
  };

  // return(dispatch(fetchVenues('business',)));
};


// export function login(provider) {
//   return {
//     type: "LOGIN",
//     provider
//   };
// }

export function addComment(comment, user, venue) {
  return {
    type: "ADD_COMMENT",
    comment,
    user,
    posted_on: Date.now(),
    venue
  };
}
export function removeComment(user, index) {
  return {
    type: "REMOVE_COMMENT",
    index
  };
}

// export function RSVP(attending, user) {
//   type: "RSVP", attending, user;
// }

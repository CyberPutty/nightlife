const initialState = {
  venues: [],
  valid: "fail",
  query: "",
  searchedOn: "",
  location: "",
  isLoading: false
};

const search = function search(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "SEARCH_STARTED":
      return { ...newState, query: action.query, isloading: true };
    case "SEARCH_RESULTS":
      return {
        ...newState,
        query: action.query,
        venues: action.venues,
        searchedOn: action.searchedOn,
        isloading: false
      };
    default:
      return state;
  }
};
export default search;

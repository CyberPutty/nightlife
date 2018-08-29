
const initialState={
    index: 0,
    alias: '',
    active: false,
}

const focusVenue=(state= initialState,action)=>{
console.log(action);
if(action.type==='FOCUS_VENUE'){
    return {
        ...state,
        index: action.index,
        alias: action.alias,
      
    }
}

    return state;

}
export default focusVenue;
import React from "react";

const Comments = ({ comments, venue }) => {
  return (
    <div>
      {venue.comments.map(function(comment){
return (<div><p>{comment.content}</p></div>);

      })}
        
    </div>
  );
};


export default Comments;
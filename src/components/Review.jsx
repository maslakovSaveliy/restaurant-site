import React from "react";
const Review = ({ name, body, id }) => {
  return (
    <div className="review">
      <div className="review__content">
        <h2>
          {id}. {name}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default Review;

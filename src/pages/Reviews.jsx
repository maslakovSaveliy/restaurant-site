import React, { useEffect, useState } from "react";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";
import Review from "../components/Review";
import StickyTitle from "../components/UI/stickTitle/StickyTitle";
import { Circles } from "react-loader-spinner";
const Reviews = () => {
  const [reviews, setRewiews] = useState([]);
  const [fetchReviews, isLoading, error] = useFetching(async () => {
    const response = await Service.getComments();
    setRewiews(response.data);
  });
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      {error ? (
        <div style={{ height: "100vh", color: "red" }}>{error}</div>
      ) : (
        <>
          <StickyTitle>Reviews page</StickyTitle>
          <div className="reviews">
            {isLoading ? (
              <div style={{ height: "100vh" }}>
                <Circles color="white" />
              </div>
            ) : (
              reviews.map((review, index) => (
                <Review
                  name={review.name}
                  body={review.body}
                  id={index + 1}
                  key={index}
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Reviews;

import React, { useEffect, useState, useContext } from "react";
import Service from "../API/Service";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Review from "../components/Review";
import MyButton from "../components/UI/button/MyButton";
import StickyTitle from "../components/UI/stickTitle/StickyTitle";
import { Circles } from "react-loader-spinner";
import { Context } from "../context/Context";
const Reviews = () => {
  const { reviews, isLoading, error, clear, addFeedback } = useContext(Context);
  const navigate = useNavigate(true);
  return (
    <>
      {error ? (
        <div style={{ height: "100vh", color: "red" }}>{error}</div>
      ) : (
        <>
          <StickyTitle>Reviews page</StickyTitle>
          <div style={{ marginTop: "20px" }}>
            <MyButton onClick={() => navigate("/feedback")}>Feedback</MyButton>
          </div>
          <div className="reviews">
            {reviews.map((review, index) => (
              <Review
                name={review.name}
                body={review.body}
                id={index + 1}
                key={index}
              />
            ))}
            {isLoading && (
              <div style={{ height: "100vh" }}>
                <Circles color="white" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Reviews;

import React, { useEffect, useState, useContext, useRef } from "react";
import Service from "../API/Service";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Review from "../components/Review";
import MyButton from "../components/UI/button/MyButton";
import StickyTitle from "../components/UI/stickTitle/StickyTitle";
import { Circles } from "react-loader-spinner";
import { Context } from "../context/Context";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
const Reviews = () => {
  const {
    reviews,
    isLoading,
    error,
    page,
    totalPages,
    setPage,
    limit,
    setLimit,
  } = useContext(Context);
  const navigate = useNavigate(true);
  const ref = useRef();
  useObserver(ref, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });
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
            <MySelect
              value={limit}
              onChange={(value) => setLimit(value)}
              defaultValue="Amount of elements"
              options={[
                { name: "5", value: 5 },
                { name: "10", value: 10 },
                { name: "25", value: 25 },
                { name: "50", value: 50 },
                { name: "All", value: -1 },
              ]}
            />
            {reviews.map((review, index) => (
              <Review
                name={review.name}
                body={review.body}
                id={index + 1}
                key={index}
              />
            ))}
            <div style={{ width: "100%", height: "1px" }} ref={ref} />
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

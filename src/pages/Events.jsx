import React, { useState } from "react";
import Event from "../components/Event";
import StickyTitle from "../components/UI/stickTitle/StickyTitle";
const Events = () => {
  const [events, setEvents] = useState([
    {
      title: "event1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event5",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event6",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
    {
      title: "event7",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus harum eaque ratione voluptatum iste delectus rerum libero amet, beatae obcaecati similique soluta vel minus maiores autem odit quaerat. Laborum?",
    },
  ]);
  return (
    <>
      <StickyTitle>Events page</StickyTitle>
      <div className="events">
        {events.map((event, index) => (
          <Event
            title={event.title}
            body={event.body}
            key={index}
            id={index + 1}
          />
        ))}
      </div>
    </>
  );
};
export default Events;

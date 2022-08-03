import React from "react";
const Event = ({ title, body, id, setModalState }) => {
  return (
    <div className="event">
      <div className="event__content">
        <h1>
          {id}. {title}
        </h1>
        <p>{body}</p>
        <a
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => setModalState(true)}
        >
          Book a table
        </a>
      </div>
    </div>
  );
};
export default Event;

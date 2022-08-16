import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import MyButton from "./UI/button/MyButton";
const Event = ({ title, body, id }) => {
  const { setModal } = useContext(Context);
  const [visible, setVisible] = useState(false);
  return (
    <div className="event">
      <div className="event__content">
        <h1>
          {id}. {title}
        </h1>
        <MyButton
          style={{ background: "grey", borderRadius: "10px" }}
          onClick={() => setVisible((state) => !state)}
        >
          {visible ? "Hide details" : "Show details"}
        </MyButton>
        {visible && (
          <>
            <p>{body}</p>
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setModal(true)}
            >
              Book a table
            </a>
          </>
        )}
      </div>
    </div>
  );
};
export default Event;

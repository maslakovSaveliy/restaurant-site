import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import MyButton from "../components/UI/button/MyButton";
import { Context } from "../context/Context";
import { Circles } from "react-loader-spinner";
const Feedback = () => {
  const { addFeedback } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(true);
  const submit = (data) => {
    setIsLoading(true);
    const fb = {
      name: localStorage.getItem("name"),
      body: data.body,
      email: localStorage.getItem("email"),
    };
    addFeedback(fb);
    reset();
    setIsLoading(false);
    navigate("/reviews");
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Feedback:
          <textarea
            placeholder="Write about your impressions about the restaurant"
            {...register("body", {
              required: "The field is empty",
              maxLength: {
                value: 2000,
                message: "No more 200 symbols",
              },
              minLength: {
                value: 30,
                message: "Minimum 30 symbols",
              },
            })}
          />
          <div>
            {errors?.body && <p>{errors?.body?.message || "Error!"}</p>}
          </div>
        </label>
        <MyButton disabled={!isValid} type="submit">
          Send
        </MyButton>
      </form>
      {isLoading && <Circles color="white" />}
    </div>
  );
};
export default Feedback;

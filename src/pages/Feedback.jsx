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
      name: data.name,
      body: data.body,
      email: data.email,
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
          Your name:
          <input
            type="text"
            placeholder="Bob Marley"
            {...register("name", {
              required: "The field is empty",
            })}
          />
          <div>
            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          Your email:
          <input
            type="text"
            placeholder="test@gmail.com"
            {...register("email", {
              required: "The field is empty",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please leave a real email",
              },
            })}
          />
          <div>
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
        </label>
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

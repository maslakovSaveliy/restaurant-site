import React, { useState } from "react";
import { useFetching } from "../hooks/useFetching";
import Service from "../API/Service";
import { useForm } from "react-hook-form";
const BookingForm = ({ setModalState }) => {
  const date = new Date();
  const [fetchMsg, isLoading, error] = useFetching(async (data) => {
    await Service.sendMessage(data);
  });
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const formSubmit = (data) => {
    fetchMsg(data);
    reset();
    setModalState(false);
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label>
        First name
        <input
          {...register("firstName", {
            required: "The field is empty",
          })}
        />
        <div>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
      </label>
      <label>
        Last name
        <input
          {...register("lastName", {
            required: "The field is empty",
          })}
        />
        <div>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>
      </label>
      <label>
        Date
        <input
          {...register("date", {
            required: "The field is empty",
          })}
          type="date"
          min={date.toISOString().split("T")[0]}
          max="2023-03-01"
        />
        <div>{errors?.date && <p>{errors?.date?.message || "Error!"}</p>}</div>
      </label>
      <label>
        Phone Number
        <input
          {...register("number", {
            required: "The field is empty",
            pattern: {
              value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
              message: "invalid pattern",
            },
            minLength: { value: 11, message: "Min length 11" },
            maxLength: { value: 11, message: "Max length 11" },
          })}
          placeholder="89234567890"
        />
        <div>
          {errors?.number && <p>{errors?.number?.message || "Error!"}</p>}
        </div>
      </label>
      <button type="submit" disabled={!isValid}>
        book a table
      </button>
    </form>
  );
};
export default BookingForm;

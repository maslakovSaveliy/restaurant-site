import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useFetching } from "../hooks/useFetching";
import Service from "../API/Service";
const BookingForm = ({ setModalState }) => {
  let date = new Date();
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    date: "",
    number: "",
  });
  const [fetchMsg, isMsgLoading, msgError] = useFetching(async () => {
    await Service.sendMessage(formValues);
  });
  const formSubmit = (e) => {
    e.preventDefault();
    setModalState(false);
    console.log(formValues);
    fetchMsg();
    setFormValues({
      name: "",
      surname: "",
      date: "",
      number: "",
    });
  };
  return (
    <form onSubmit={(e) => formSubmit(e)}>
      <label>
        Имя
        <input
          name="name"
          value={formValues.name}
          type="text"
          placeholder="Bob"
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
      </label>
      <label>
        Фамилия
        <input
          name="surname"
          value={formValues.surname}
          type="text"
          placeholder="Marley"
          onChange={(e) =>
            setFormValues({ ...formValues, surname: e.target.value })
          }
        />
      </label>
      <label>
        Дата
        <input
          type="date"
          name="date"
          value={formValues.date}
          min={date.toISOString().split("T")[0]}
          max="2023-03-01"
          onChange={(e) =>
            setFormValues({ ...formValues, date: e.target.value })
          }
        />
      </label>
      <label>
        Номер телефона
        <NumberFormat
          placeholder="+7 (923) 456-7890"
          value={formValues.number}
          format="+7 (###) ###-####"
          mask="_"
          onChange={(e) =>
            setFormValues({ ...formValues, number: e.target.value })
          }
        />
      </label>
      <button type="submit">book a table</button>
    </form>
  );
};
export default BookingForm;

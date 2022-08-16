import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Context } from "../context/Context";
import MyButton from "../components/UI/button/MyButton";
const AuthPage = () => {
  const { setIsAuth } = useContext(Context);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const login = (data) => {
    console.log(data);
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    localStorage.setItem("name", data.name);
    reset();
  };
  return (
    <>
      <div className="auth">
        <form onSubmit={handleSubmit(login)}>
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
            Your password:
            <input
              type="text"
              placeholder="qwerty12345!"
              {...register("name", {
                required: "The field is empty",
                minLength: {
                  value: 6,
                  message: "Your password must be more than 5 symbols",
                },
              })}
            />
            <div>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </label>
          <MyButton type="submit" disabled={!isValid}>
            Login
          </MyButton>
        </form>
      </div>
    </>
  );
};
export default AuthPage;

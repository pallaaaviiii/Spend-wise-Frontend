import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { createuser } from "../../api/https";
import { toast } from "react-toastify";
export default function Signup({ onClick }) {
  const [isLoading, setisloading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setisloading(true);

    if (data) {
      try {
        const response = await createuser(data);
        if (response?.status === 200) {
          toast("Signed Up Successfull!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "success",
          });
          reset()
          onClick();
        }
      } catch (e) {
        if (e.response.status === 401) {
          toast("User Already Exist, Try With new Email", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "warning",
          });
          onClick();
        } else {
          toast(e.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "warning",
          });
        }
      }
    }
    setisloading(false);
  };
  return (
    <form
      className="p-10 max-md:px-5 flex flex-col items-center  h-full gap-7 max-md:gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-5xl max-md:text-4xl font-bold text-black">Sign Up</h1>
      <div className="p-3 w-full flex flex-col md:gap-5 gap-2">
        <div className="w-full">
          <input
            className="h-12 p-4 font-mono rounded-xl focus:outline-none w-full"
            placeholder="Full Name"
            {...register("fullName", { required: true, minLength: 3 })}
          />
          {
            <p
              className={`text-red-600 font-medium mt-2 ${
                errors.fullName ? "" : "opacity-0"
              }`}
            >
              Please Fill the Required Field
            </p>
          }
        </div>
        <div className="w-full">
          <input
            className="h-12 p-4 font-mono rounded-xl focus:outline-none w-full"
            placeholder="Email Address"
            type="email"
            {...register("email", { required: true })}
          />
          {
            <p
              className={`text-red-600 font-medium mt-2 ${
                errors.email ? "" : "opacity-0"
              }`}
            >
              Please Fill the Required Field
            </p>
          }
        </div>
        <div className="w-full">
          <input
            className="h-12 p-4 font-mono rounded-xl focus:outline-none w-full"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {
            <p
              className={`text-red-600 font-medium mt-2 ${
                errors.password ? "" : "opacity-0"
              }`}
            >
              Please Fill the Required Field
            </p>
          }
        </div>
        <div className="w-full">
          <input
            className="h-12 p-4 font-mono rounded-xl focus:outline-none w-full"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (val) =>
                val === watch("password") ||
                "The Password confirmation do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className={`font-medium text-red-600 mt-2 `}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>
      <div className="w-full px-3">
        <p className="md:text-lg font-semibold text-black ">
          Already Have an account?{" "}
          <span className="font-bold cursor-pointer" onClick={onClick}>
            Sign in
          </span>
        </p>
      </div>
      <div className="w-full">
        <button
          className="w-full rounded-full bg-black text-white p-3"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Sign up"}
        </button>
      </div>
    </form>
  );
}

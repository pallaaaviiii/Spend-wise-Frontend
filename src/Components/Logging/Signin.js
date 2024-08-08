import React, { useState } from "react";
import logo from "../../img/logo.jpg";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { userSign } from "../../api/https";
import { toast } from "react-toastify";

export default function SignIn({ onClick }) {
  const [isLoading, setisloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setisloading(true);
    console.log(data);
    try {
      const response = await userSign(data);
      if (response) {
        toast("Loggin Successfull", {
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
        localStorage.setItem("token",response.data.data)
        window.location.reload();
        reset()
      }
    } catch (e) {
      if (e.response.status === 404) {
        toast("User not found, Try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      }else if(e.response.status === 402){
        toast("Wrong Pasword,try again", {
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
      }else{
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
      console.log(e);
    }
    setisloading(false);
  };

  return (
    <form
      className="p-10 max-md:px-5 flex flex-col items-center   gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <figure className="w-2/12 ">
        <img src={logo} alt="logo" className="rounded-full" />
      </figure>
      <h1 className="text-5xl max-md:text-4xl font-bold text-black">Sign In</h1>
      <div className="p-3 w-full flex flex-col gap-5">
        <div className="w-full ">
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
      </div>
      <div className="w-full px-3">
        <p className="text-lg font-semibold text-black">
          Have No account?{" "}
          <span className="font-bold cursor-pointer" onClick={onClick}>
            Sign Up
          </span>
        </p>
      </div>
      <div className="w-full">
        <button
          className="w-full rounded-full bg-black text-white p-3"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Sign In"}
        </button>
      </div>
    </form>
  );
}

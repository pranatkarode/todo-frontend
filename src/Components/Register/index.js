import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../Utils/endpoints";

export default function Register() {
  // const [formState,setFormState]=useState({})
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = (data) => {
    fetch(registerUser, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        console.log(d);
        if (!d.ok) {
          Object.keys(d.errors).forEach((key) => {
            setError(
              key,
              {
                type: "custom",
                message: (() => {
                  let words = d.errors[key].replace(/([A-Z])/g, " $1");
                  return words.charAt(0).toUpperCase() + words.slice(1);
                })(),
              },
              { shouldFocus: true }
            );
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="border border-slate-900 rounded-md p-8 lg:p-16 w-full lg:w-[70%] xl:w-1/3 ">
        <div className="text-xl font-bold mb-8">Register</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              {...register("userName", {
                required: true,
              })}
              placeholder="User Name"
              className={`px-2 py-1 border ${
                errors.userName ? "border-red-600 border-2" : "border-black"
              }  rounded-md`}
            />
            {errors?.userName && (
              <p className="text-xs text-red-600">
                {errors?.userName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("email", {
                required: true,
              })}
              placeholder="Email Address"
              className={`px-2 py-1 border ${
                errors.email ? "border-red-600" : "border-black"
              }  rounded-md`}
            />
            {errors?.email && (
              <p className="text-xs text-red-600">{errors?.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("firstName", {
                required: true,
              })}
              placeholder="First Name"
              className={`px-2 py-1 border ${
                errors.firstName ? "border-red-600" : "border-black"
              }  rounded-md`}
            />
            {errors?.firstName && (
              <p className="text-xs text-red-600">
                {errors?.firstName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("lastName", {
                required: true,
              })}
              placeholder="Last Name"
              className={`px-2 py-1 border ${
                errors.lastName ? "border-red-600" : "border-black"
              }  rounded-md`}
            />
            {errors?.lastName && (
              <p className="text-xs text-red-600">
                {errors?.lastName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              type="password"
              placeholder="Password"
              className={`px-2 py-1 border ${
                errors.password ? "border-red-600" : "border-black"
              }  rounded-md`}
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            className="text-white bg-slate-800 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

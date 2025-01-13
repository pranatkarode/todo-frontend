import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  // const [formState,setFormState]=useState({})
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data, errors);
  };
  console.log("errors", errors);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-slate-900 rounded-md p-16 w-1/3 ">
        <div className="text-xl font-bold mb-8">Register</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("userName", {
              required: true,
            })}
            placeholder="User Name"
            className="px-2 py-1 border border-black rounded-md"
          />
          <input
            {...register("email", {
              required: true,
            })}
            placeholder="Email Address"
            className="px-2 py-1 border border-black rounded-md"
          />
          <input
            {...register("firstName", {
              required: true,
            })}
            placeholder="First Name"
            className="px-2 py-1 border border-black rounded-md"
          />
          <input
            {...register("lastName", {
              required: true,
            })}
            placeholder="Last Name"
            className="px-2 py-1 border border-black rounded-md"
          />
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              maxLength: {
                value: 5,
                message: "Max length is 5",
              },
            })}
            placeholder="Password"
            className="px-2 py-1 border border-black rounded-md"
          />
          {errors.password && (
            <p className="text-xs text-red-600">{errors.password.message}</p>
          )}
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

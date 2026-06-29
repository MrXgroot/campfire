import React from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { mutateAsync: registerUser, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);

      console.log(response);

      navigate("/login", {
        replace: true,
        state: {
          message: response.message,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Username */}
      <div className="space-y-1">
        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          className={`w-full h-10 rounded-full px-4 text-sm bg-[#272729] text-[#d7dadc] placeholder-[#818384] border transition-colors focus:outline-none ${
            errors.username
              ? "border-[#ff4500]"
              : "border-[#343536] focus:border-[#d7dadc]"
          }`}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
            maxLength: {
              value: 30,
              message: "Cannot exceed 30 characters",
            },
          })}
        />

        {errors.username && (
          <p className="pl-3 text-[11px] text-[#ff4500]">
            {errors.username.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          className={`w-full h-10 rounded-full px-4 text-sm bg-[#272729] text-[#d7dadc] placeholder-[#818384] border transition-colors focus:outline-none ${
            errors.email
              ? "border-[#ff4500]"
              : "border-[#343536] focus:border-[#d7dadc]"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        {errors.email && (
          <p className="pl-3 text-[11px] text-[#ff4500]">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1">
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          className={`w-full h-10 rounded-full px-4 text-sm bg-[#272729] text-[#d7dadc] placeholder-[#818384] border transition-colors focus:outline-none ${
            errors.password
              ? "border-[#ff4500]"
              : "border-[#343536] focus:border-[#d7dadc]"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
              message:
                "Must include uppercase, lowercase, number and special character",
            },
          })}
        />

        {errors.password && (
          <p className="pl-3 text-[11px] text-[#ff4500]">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full h-10 rounded-full bg-[#ff4500] hover:bg-[#ff5714] disabled:bg-[#ff4500]/50 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-950/10 flex items-center justify-center"
      >
        {isPending ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
}

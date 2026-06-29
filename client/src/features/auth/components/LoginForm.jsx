import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const { mutateAsync: loginUser, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      console.log(response);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
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
          autoComplete="current-password"
          className={`w-full h-10 rounded-full px-4 text-sm bg-[#272729] text-[#d7dadc] placeholder-[#818384] border transition-colors focus:outline-none ${
            errors.password
              ? "border-[#ff4500]"
              : "border-[#343536] focus:border-[#d7dadc]"
          }`}
          {...register("password", {
            required: "Password is required",

            minLength: {
              value: 6,
              message: "Must be at least 6 characters",
            },
          })}
        />

        {errors.password && (
          <p className="pl-3 text-[11px] text-[#ff4500]">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-10 rounded-full bg-[#ff4500] hover:bg-[#ff5714] disabled:bg-[#ff4500]/50 text-white font-semibold text-sm transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          "Log In"
        )}
      </button>
    </form>
  );
}

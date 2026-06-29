import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  // Switch between Login and Register views cleanly
  const toggleAuthMode = () => {
    reset();
    setIsLogin(!isLogin);
  };

  const onSubmit = async (data) => {
    // Treat data submission framework-agnostically (Firebase, Supabase, Node.js API)
    console.log(
      `${isLogin ? "Login" : "Registration"} payload submitted:`,
      data,
    );

    // Simulate API Network Request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const handleOAuthSignIn = (provider) => {
    // Future expansion slot for Google / Facebook SDK redirect initialization hooks
    console.log(`Initiating ${provider} authentication flow...`);
  };

  return (
    <main className="min-h-screen bg-[#1a1a1b] text-[#d7dadc] flex items-center justify-center p-6 selection:bg-[#343536]">
      <div className="w-full max-w-[360px] space-y-6 animate-in fade-in duration-200">
        {/* Header Branding */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-bold text-white tracking-tight">
            {isLogin ? "Sign in to Campfire" : "Create your account"}
          </h1>
          <p className="text-xs text-[#818384]">
            {isLogin
              ? "Welcome back, developer"
              : "Join the developer circle today"}
          </p>
        </div>

        {/* Scalable OAuth Integration Wrapper Block */}
        <div className="space-y-2">
          <button
            onClick={() => handleOAuthSignIn("Google")}
            type="button"
            className="w-full h-10 flex items-center justify-center gap-2 bg-[#272729] hover:bg-[#2d2d30] border border-[#343536] text-sm text-[#d7dadc] rounded-full transition-colors font-medium"
          >
            {/* SVG placeholder for Google Logo Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <button
            onClick={() => handleOAuthSignIn("Facebook")}
            type="button"
            className="w-full h-10 flex items-center justify-center gap-2 bg-[#272729] hover:bg-[#2d2d30] border border-[#343536] text-sm text-[#d7dadc] rounded-full transition-colors font-medium"
          >
            {/* SVG placeholder for Facebook Icon */}
            <svg
              className="w-4 h-4 text-[#1877F2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Continue with Facebook</span>
          </button>
        </div>

        {/* Divider Separation Mark */}
        <div className="flex items-center gap-3 py-1">
          <div className="h-px bg-[#343536] flex-1" />
          <span className="text-[10px] text-[#818384] font-bold tracking-wider uppercase">
            OR
          </span>
          <div className="h-px bg-[#343536] flex-1" />
        </div>

        {/* Declarative React Hook Form Element */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          {/* Registration Name Context (Conditionally Displayed) */}
          {!isLogin && (
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                className={`w-full h-10 bg-[#272729] border ${errors.username ? "border-[#ff4500]" : "border-[#343536] focus:border-[#d7dadc]"} rounded-full px-4 text-sm text-[#d7dadc] focus:outline-none transition-colors placeholder-[#818384]`}
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                  },
                })}
              />
              {errors.username && (
                <p className="text-[11px] text-[#ff4500] pl-3">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}

          {/* Core Email Input Field */}
          <div className="space-y-1">
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className={`w-full h-10 bg-[#272729] border ${errors.email ? "border-[#ff4500]" : "border-[#343536] focus:border-[#d7dadc]"} rounded-full px-4 text-sm text-[#d7dadc] focus:outline-none transition-colors placeholder-[#818384]`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-[11px] text-[#ff4500] pl-3">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Secure Password Input Field */}
          <div className="space-y-1">
            <input
              type="password"
              placeholder="Password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              className={`w-full h-10 bg-[#272729] border ${errors.password ? "border-[#ff4500]" : "border-[#343536] focus:border-[#d7dadc]"} rounded-full px-4 text-sm text-[#d7dadc] focus:outline-none transition-colors placeholder-[#818384]`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-[11px] text-[#ff4500] pl-3">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Form Processing Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 bg-[#ff4500] hover:bg-[#ff5714] disabled:bg-[#ff4500]/50 text-white font-semibold rounded-full text-sm transition-colors shadow-lg shadow-orange-950/10 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <span>{isLogin ? "Log In" : "Get Started"}</span>
            )}
          </button>
        </form>

        {/* View Layout Footer Switch Toggle */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={toggleAuthMode}
            className="text-xs text-[#818384] hover:text-[#d7dadc] transition-colors"
          >
            {isLogin ? (
              <>
                New to Campfire?{" "}
                <span className="text-[#ff4500] font-medium">
                  Create account
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-[#ff4500] font-medium">Log in</span>
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}

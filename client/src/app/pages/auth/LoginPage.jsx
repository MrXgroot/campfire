import React from "react";

import AuthHeader from "../../../features/auth/components/AuthHeader";
import OAuthSection from "../../../features/auth/components/OAuthSection";
import AuthDivider from "../../../features/auth/components/AuthDivider";
import LoginForm from "../../../features/auth/components/LoginForm";
import AuthFooter from "../../../features/auth/components/AuthFooter";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1b] text-[#d7dadc] flex items-center justify-center p-6">
      <div className="w-full max-w-[360px] space-y-6">
        <AuthHeader
          title="Sign in to Campfire"
          subtitle="Welcome back, developer"
        />

        <OAuthSection />

        <AuthDivider />

        <LoginForm />

        <AuthFooter
          text="New to Campfire?"
          linkText="Create account"
          link="/register"
        />
      </div>
    </main>
  );
}

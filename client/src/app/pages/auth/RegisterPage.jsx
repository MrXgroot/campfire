import AuthHeader from "../../../features/auth/components/AuthHeader";
import OAuthSection from "../../../features/auth/components/OAuthSection";
import AuthDivider from "../../../features/auth/components/AuthDivider";
import RegisterForm from "../../../features/auth/components/RegisterForm";
import AuthFooter from "../../../features/auth/components/AuthFooter";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1b] text-[#d7dadc] flex items-center justify-center p-6">
      <div className="w-full max-w-[360px] space-y-6">
        <AuthHeader
          title="Create your account"
          subtitle="Join the developer circle today"
        />

        <OAuthSection />

        <AuthDivider />

        <RegisterForm />

        <AuthFooter
          text="Already have an account?"
          linkText="Log in"
          link="/login"
        />
      </div>
    </main>
  );
}

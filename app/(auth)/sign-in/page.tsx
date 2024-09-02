import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";

const SignInPage = () => {
  return (
    <main className="w-full flex-col md:flex-row items-center flex md:items-start">
      <div className="w-full h-[280px]">
        <Image
          src="/assets/images/mobile-auth_logo.png"
          alt="auth logo"
          height={280}
          width={768}
          className="object-cover h-[280px]"
        />
      </div>
      <div className="flex flex-1 flex-col h-full">
        <AuthForm type="sign-in" />
      </div>

      <div className="hidden md:flex-1 h-full">
        <Image
          src="/assets/images/auth-logo.png"
          alt="auth logo"
          width={720}
          height={1024}
          className="object-cover min-h-[720px]"
        />
      </div>
    </main>
  );
};

export default SignInPage;

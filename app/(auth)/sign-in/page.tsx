import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";

const SignInPage = () => {
  return (
    <main className="w-full flex-col md:flex-row items-center flex md:items-start">
      <div className="w-full h-[280px] block md:hidden">
        <Image
          src="/assets/images/mobile-auth_logo.png"
          alt="auth logo"
          height={280}
          width={768}
          className="object-cover h-[280px]"
        />
      </div>
      <div className="w-full flex flex-1 flex-col h-full mt-4">
        <AuthForm type="sign-in" />
      </div>

      <div className="hidden md:flex flex-1 h-screen">
        <Image
          src="/assets/images/auth-logo.png"
          alt="auth logo"
          width={720}
          height={1024}
          className="object-cover min-h-[720px] w-full"
        />
      </div>
    </main>
  );
};

export default SignInPage;

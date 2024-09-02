import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <main className="w-full flex items-start">
      <div className="flex flex-1 flex-col h-full">
        <AuthForm type="sign-up" />
      </div>
      <div className="flex-1 h-full">
        <Image
          src="/assets/images/auth-logo2.png"
          alt="auth logo"
          width={720}
          height={1024}
          className="object-cover min-h-[720px]"
        />
      </div>
    </main>
  );
};

export default SignUpPage;

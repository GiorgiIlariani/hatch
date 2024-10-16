import Image from "next/image";

export default function CreateUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex flex-col-reverse md:flex-row items-center md:items-start">
      <div className="w-full flex flex-1 flex-col h-full">{children}</div>
      <div className="w-full flex-1 h-[280px] md:h-screen">
        <Image
          src="/assets/images/auth-logo2.png"
          alt="auth logo"
          width={720}
          height={1024}
          className="object-cover h-[280px] w-full md:h-screen"
        />
      </div>
    </main>
  );
}

import LeftSidebar from "@/components/shared/layout/LeftSidebar";
import MobileTopBar from "@/components/shared/layout/MobileTopBar";

export default function SignedInUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen">
      <div className="w-[200px] md:w-[256px] hidden sm:block">
        <LeftSidebar />
      </div>
      <div className="w-full block sm:hidden mt-4">
        <MobileTopBar />
      </div>
      <div className="flex-1 py-8 px-4">{children}</div>
    </main>
  );
}

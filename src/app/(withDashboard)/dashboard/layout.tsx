import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sadikVerse Dashboard",
  description: "Welcome to sadikVerse",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] text-gray-800 bg-white dark:bg-slate-900 dark:text-white pl-6">
          {children}
        </div>
      </div>
    </div>
  );
}

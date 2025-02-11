import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const session = await getServerSession(authOptions);

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar session={session}></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

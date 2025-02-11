import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

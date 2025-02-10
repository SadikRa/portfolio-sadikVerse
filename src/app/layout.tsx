import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Providers from "@/lib/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sadikVerse",
  description: "Welcome to sadikVerse",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          <div className="max-w-7xl mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar session={session}></Navbar>
              <div className="min-h-screen">{children}</div>
              <Footer />
              <Toaster />
            </ThemeProvider>
          </div>
        </body>
      </html>
    </Providers>
  );
}

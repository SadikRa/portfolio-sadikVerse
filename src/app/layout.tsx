import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import Providers from "@/lib/Providers";

import { Toaster } from "sonner";

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
              <div>{children}</div>
              <Toaster />
            </ThemeProvider>
          </div>
        </body>
      </html>
    </Providers>
  );
}

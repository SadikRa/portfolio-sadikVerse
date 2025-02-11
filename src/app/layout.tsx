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
  title: "SadikVerse",
  description: "Welcome to SadikVerse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50 dark:bg-gray-900`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-7xl mx-auto">
              {children}
              <Toaster />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

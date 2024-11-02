import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GlobalStateProvider } from "./components/StateProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calgary Transit Bus Kiosk",
  description: "A bus kiosk for Calgary Transit",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body>
          <main className="bg-black flex h-screen justify-center items-center flex-col">
            <div className="h-screen aspect-[3/4] bg-city relative font-bold text-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 flex flex-col justify-center items-center text-white">
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </GlobalStateProvider>
  );
}
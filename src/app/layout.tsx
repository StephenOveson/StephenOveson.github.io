import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { spiegel } from "@/fonts";
import Providers from "./providers";


export const metadata: Metadata = {
  title: "Stephen Oveson",
  description: "Web developer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <Providers>
          <main className={`${spiegel.className} bg-linear-to-r from-blue-6 to-blue-7`}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

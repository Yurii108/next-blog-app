import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Provaders";
import { Header } from "@/components/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopEvoNext",
  description: "Online store based on Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

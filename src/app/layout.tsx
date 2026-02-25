import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import { SidebarNav } from "@/components/SidebarNav";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lendsight — Compare Financial Rates",
  description:
    "Compare CD rates, savings accounts, mortgages and more from local banks and credit unions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${inter.variable}`}
        style={{ display: "flex", minHeight: "100vh", margin: 0 }}
      >
        <SidebarNav />
        <main
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--color-bg-base)",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

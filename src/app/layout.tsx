import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/assets/normalize/normalize.css";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
};

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-Inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

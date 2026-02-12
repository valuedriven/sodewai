import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SeWAI - Gestão e E-commerce",
  description: "Plataforma de gestão e e-commerce para microempreendedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

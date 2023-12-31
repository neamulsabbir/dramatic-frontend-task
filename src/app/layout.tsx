import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/providers/providers";
import Footer from "@/Components/SharedFile/Footer/Footer";
import StyledComponentsRegistry from "./Styled-components/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dramatic",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

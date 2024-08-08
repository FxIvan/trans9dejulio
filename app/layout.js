import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Transportes 9 de Julio S.A.",
  description:
    "Transportes 9 de Julio S.A. es una empresa de recolección de residuos de la ciudad de Mar del Plata.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Elitehunting",
  description: "Любительская, спортивная и трофейная охота в охотхозяйстве",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className + " bg-[#F0F0F0] text-black"}>
        <Navbar />
        {children}</body>
    </html>
  );
}


import Header from "@/components/shared/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all weights
  subsets: ["latin", "latin-ext"], // all available subsets for Poppins
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${poppins.className} text-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Ac Repairing",
  description:
    "Looking for air conditioner repair and Ac installation in Dubai? We offer expert AC repair, aircon installation, and maintenance services near you. Call us today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-quicksand antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

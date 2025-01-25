import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Ac Repairing",
  description: "Best Ac Service In your Area",
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

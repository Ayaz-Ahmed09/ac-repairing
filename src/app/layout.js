import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Ac Repairing Services in Dubai",
  description:
    "Looking for air conditioner repair and AC installation in Dubai? We offer expert AC repair, aircon installation, and maintenance services near you. Call us today.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    highResolution: "/android-chrome-512x512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GTM) - HEAD */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K37KTXW4');
            `,
          }}
        />
      </head>
      <body className="font-quicksand antialiased">
        {/* Google Tag Manager (noscript) - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K37KTXW4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

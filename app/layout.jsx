import localFont from "next/font/local";
import "./globals.css";
import Creator from "@components/Creator";
import NavBar from "@components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "InnoGen",
  description: "Empower your learning by engaging with a community of developers and creators working together on cutting-edge technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color`}
      >
              <Creator>

        <NavBar/>
        {children}
        </Creator>
      </body>
    </html>
  );
}

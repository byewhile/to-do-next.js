import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = {
  title: "To-Do List",
  description: "To-Do List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

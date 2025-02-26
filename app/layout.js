import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Happy Birthday Ayesha 💖",
  description: "A special interactive 3D birthday website for Ayesha 🎉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
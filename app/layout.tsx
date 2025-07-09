import "./globals.css";
import { Inter } from "next/font/google";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import { Suspense } from "react";
import Providers from "./components/Providers";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPL T20 Live Dashboard",
  description:
    "Real-time IPL cricket match information, points table, and schedule",
  keywords: "IPL, cricket, T20, live scores, points table, match schedule",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Providers>
              <ConfigProvider>
                <main className="min-h-screen bg-gray-50">{children}</main>
                <footer>Made by Rakesh Kumar</footer>
              </ConfigProvider>
            </Providers>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Container } from '@mui/material';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Header />
          {/* {children} */}
          <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

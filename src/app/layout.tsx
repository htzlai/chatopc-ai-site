import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import NebulaCanvas from "@/components/backgrounds/NebulaCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatOPC - 一人公司的 AI 伙伴",
  description: "专为一人公司（One Person Company）打造的 AI 对话聊天平台。模型在通缩，整合在溢价。让一个人也能拥有团队级别的能力，用 AI 重构工作流，建立信任壁垒。",
  keywords: ["一人公司", "OPC", "AI助手", "自动化", "副业", "兼职", "AI整合", "工作流", "ChatOPC", "AI工具"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--color-bg-dark)]`}
      >
        <ClientProviders>
          <NebulaCanvas />
          <NavBar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

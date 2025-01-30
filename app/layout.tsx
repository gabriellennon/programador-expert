import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Torne-se um Desenvolvedor Profissional | Curso Completo de Programação",
  description:
    "Programador Expert: Aprenda programação do zero e comece a ganhar de R$3 a R$7 mil mensais. Participe do nosso curso de programação abrangente e lance sua carreira em tecnologia em apenas 6 meses.",
  keywords: "programming course, tech career, coding bootcamp, web development, professional developer",
  openGraph: {
    title: "Torne-se um Desenvolvedor Profissional | Curso Completo de Programação",
    description:
      "Aprenda programação do zero e comece a ganhar de R$3 a R$7k mensalmente. Participe do nosso curso de programação abrangente.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050A30]`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-heading", weight: "400" });

export const metadata: Metadata = {
  title: "Gabriel Mesquita Oliveira | Senior Software Engineer & Tech Lead",
  description: "Senior Full Stack Developer with 5+ years building scalable applications from legacy mainframe systems to modern cloud solutions. Specialized in banking & fintech with proven expertise in Java, Angular, COBOL, and microservices architecture.",
  keywords: [
    "Gabriel Mesquita Oliveira",
    "Senior Software Engineer",
    "Tech Lead",
    "Full Stack Developer",
    "Java Developer",
    "Angular Developer",
    "COBOL Developer",
    "Banking Systems",
    "Microservices",
    "Legacy System Modernization",
    "Caixa Econômica Federal",
    "Brasília",
    "Brasil"
  ],
  authors: [{ name: "Gabriel Mesquita Oliveira" }],
  creator: "Gabriel Mesquita Oliveira",
  publisher: "Gabriel Mesquita Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabrielmesquita.dev/",
    title: "Gabriel Mesquita Oliveira | Senior Software Engineer & Tech Lead",
    description: "Senior Full Stack Developer specialized in banking & fintech with expertise in legacy system modernization and modern cloud solutions.",
    siteName: "Gabriel Mesquita Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Mesquita Oliveira | Senior Software Engineer & Tech Lead",
    description: "Senior Full Stack Developer specialized in banking & fintech with expertise in legacy system modernization.",
    creator: "@gabriel_mesquita",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable,
        calistoga.variable,
        "bg-gray-900 text-white antialiased font-sans"
      )}>
        {children}
      </body>
    </html>
  );
}

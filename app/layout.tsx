import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Script from "next/script";


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
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '945446757776833');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=945446757776833&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body className={`${inter.className} bg-[#050A30]`}>{children}</body>
    </html>
  );
}

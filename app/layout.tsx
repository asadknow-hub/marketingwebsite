import type { Metadata } from "next";
import "./globals.css";

const description =
  "Nexus AI First is the world's leading Agentic ERP. Agentic AI configures your modules and runs the daily work — reports, onboarding, and approvals — so the business never waits on a frozen solution design.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusaifirst.com"),
  title: {
    default: "Nexus AI First — The World's Leading Agentic ERP",
    template: "%s · Nexus AI First",
  },
  description,
  keywords: [
    "agentic ERP",
    "AI ERP",
    "enterprise software",
    "HRMS",
    "finance automation",
    "business process automation",
  ],
  icons: {
    icon: "/purplelogowobg.png",
    apple: "/purplelogowobg.png",
  },
  openGraph: {
    type: "website",
    siteName: "Nexus AI First",
    title: "Nexus AI First — The World's Leading Agentic ERP",
    description,
    images: [{ url: "/purplelogowobg.png", width: 1200, height: 630, alt: "Nexus AI First" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI First — The World's Leading Agentic ERP",
    description,
    images: ["/purplelogowobg.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F6F7FB] text-slate-900 antialiased">{children}</body>
    </html>
  );
}


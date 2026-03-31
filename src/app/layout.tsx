import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    // ── Basic SEO ──────────────────────────────────────────────────────────────
    title: "Tradelinkers Engineering Ltd | Turnkey Engineering Solutions in Bangladesh",
    description:
        "Tradelinkers Engineering Ltd — 50+ years of full-service multidisciplinary engineering in Bangladesh. Experts in cold storage, HVAC, refrigeration, food processing, gas metering & turnkey project management. 400+ projects delivered.",

    // ── Canonical URL ──────────────────────────────────────────────────────────
    metadataBase: new URL("https://www.tlcbd.com"),
    alternates: {
        canonical: "/",
    },

    // ── Keywords ───────────────────────────────────────────────────────────────
    keywords: [
        "engineering company Bangladesh",
        "cold storage Bangladesh",
        "HVAC systems Bangladesh",
        "refrigeration systems",
        "turnkey engineering projects",
        "food processing plant",
        "industrial construction Bangladesh",
        "Tradelinkers Engineering",
        "bulk grain handling",
        "dairy ice cream plant",
    ],

    // ── Open Graph — used by WhatsApp, Telegram, Facebook, LinkedIn ───────────
    openGraph: {
        type: "website",
        url: "https://www.tlcbd.com",
        siteName: "Tradelinkers Engineering Ltd",
        title: "Tradelinkers Engineering Ltd | Turnkey Engineering Solutions in Bangladesh",
        description:
            "50+ years of engineering excellence in Bangladesh. Cold storage, HVAC, refrigeration, food processing & turnkey projects. 400+ projects delivered nationwide.",
        images: [
            {
                url: "https://www.tlcbd.com/images/og-image.jpg", // ⚠️ see note below
                width: 1200,
                height: 630,
                alt: "Tradelinkers Engineering Ltd — Engineering Solutions That Last",
            },
        ],
        locale: "en_US",
    },

    // ── Twitter / X Card — also used by some chat apps ────────────────────────
    twitter: {
        card: "summary_large_image",
        title: "Tradelinkers Engineering Ltd | Turnkey Engineering Solutions",
        description:
            "50+ years of engineering excellence in Bangladesh. Cold storage, HVAC, refrigeration & turnkey projects. 400+ completed projects.",
        images: ["https://www.tlcbd.com/images/og-image.jpg"], // ⚠️ see note below
    },

    // ── Robots ─────────────────────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
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
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';

export const metadata = {
    title: 'Flotas App',
    description: 'Viajes',
    keywords: "viaje,flota,online",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="es">
            <head/>
            <body className="dark:bg-black">
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}

import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noel Joe Basil",
    description: "Forward Deployed Data Engineer | Palantir Foundry | AI | Azure",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
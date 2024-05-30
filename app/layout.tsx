import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Eensell",
  description: "Your Digital Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className="font-sf-pro">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { publicSans } from "@/core/utils/font";
import ThemeCostumization from "@/core/themes";

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
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${publicSans.variable}`} >
        <ThemeCostumization>
          {children}
        </ThemeCostumization>
      </body>
    </html>
  );
}

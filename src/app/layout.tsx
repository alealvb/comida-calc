import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { TailwindIndicator } from "../components/tailwind-indicator";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Comida Calc",
  description: "A simple calorie calculator for food",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider headers={headers()}>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <div className="container relative">
                <section>{children}</section>
              </div>
            </div>
          </div>
          <TailwindIndicator />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

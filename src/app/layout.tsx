import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import { TailwindIndicator } from "../components/tailwind-indicator";
import { Providers } from "~/components/providers";
import { SiteHeader } from "../components/site-header";

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
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">
              <div className="container relative">
                <section>{children}</section>
              </div>
            </div>
          </div>
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}

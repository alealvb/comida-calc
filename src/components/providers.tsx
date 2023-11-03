import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: JSX.Element;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
    </ThemeProvider>
  );
}

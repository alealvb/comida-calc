"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TooltipProvider } from "~/components/ui/tooltip";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children as JSX.Element}</TooltipProvider>
    </NextThemesProvider>
  );
}

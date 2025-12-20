"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// On utilise React.ComponentProps pour récupérer automatiquement les bons types
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
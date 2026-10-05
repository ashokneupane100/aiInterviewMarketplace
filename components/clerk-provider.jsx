"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { useTheme } from "next-themes"

export function ClerkThemeProvider({ children }) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider
      appearance={{ theme: resolvedTheme === "dark" ? "dark" : "light" }}
    >
      {children}
    </ClerkProvider>
  )
}

"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

function ThemeIcon() {
  return (
    <span className="relative flex size-4 shrink-0 items-center justify-center">
      <Sun className="absolute size-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </span>
  )
}

export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={className}
        aria-label="Choose theme"
        disabled
      >
        <ThemeIcon />
        Choose theme
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("border border-border", className)}
      aria-label="Choose theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <ThemeIcon />
      Choose theme
    </Button>
  )
}

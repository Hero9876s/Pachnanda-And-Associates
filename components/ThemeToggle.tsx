"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting until component is mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:focus:ring-blue-400">
        <span className="sr-only">Toggle theme placeholder</span>
        <div className="w-5 h-5 opacity-0" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-transparent hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:focus:ring-blue-400"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 hover:text-yellow-600 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 hover:text-slate-900 transition-colors" />
      )}
    </button>
  )
}

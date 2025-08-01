"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-muted-foreground hover:text-white transition-colors" />
      ) : (
        <Sun className="h-4 w-4 text-muted-foreground hover:text-white transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

'use client';

import { Button } from "./ui/button";

const themes = {
  red: "theme-red",
  green: "theme-green",
  purple: "theme-purple",
  rose: "theme-rose"
};

export function ThemeSwitcher() {
  const setTheme = (theme: keyof typeof themes) => {
    document.documentElement.className = themes[theme];
  };

  return (
    <div className="flex gap-2">
      {Object.keys(themes).map((theme) => (
        <Button
          key={theme}
          onClick={() => setTheme(theme as keyof typeof themes)}
          className={`bg-sidebar hover:bg-sidebar/90`}
        >
          {theme}
        </Button>
      ))}
    </div>
  );
}

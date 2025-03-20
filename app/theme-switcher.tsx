'use client';

import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // Remove previous theme
    document.documentElement.classList.remove('dark', 'red');
    
    // Add new theme
    if (theme !== 'default') {
      document.documentElement.classList.add(theme);
    }
    
    // Save preference
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  return (
    <div>
      <select 
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-background text-foreground p-2 rounded-md"
      >
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
}
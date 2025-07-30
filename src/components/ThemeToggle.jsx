import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="ml-4 text-xl"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
}
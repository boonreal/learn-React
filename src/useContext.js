import { useState, createContext } from "react";
import Paragraph from "./paragraph";
import "./App.css";
// 1. Tạo Context (phạm vi)
export const ThemeContext = createContext();

console.log(ThemeContext);

// 2. Provider (khối cung cấp)
// 3. Consumer (khối tiêu thụ)

function Content() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Theme</button>
        <Paragraph theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Content;

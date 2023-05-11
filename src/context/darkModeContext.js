import { createContext } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default DarkModeContext;

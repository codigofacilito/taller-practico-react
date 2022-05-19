import { createContext, useState } from "react";

export const lightTheme = {
  type: "light",
  colors: {
    primary: "#f72585",
    text: "#000",
    background: "#fff",
    lightText: "#fff",
    primaryText: "#2ec4b6",
    darkBackground: "#14213d"
  }
}

export const darkTheme = {
  type: "dark",
  colors: {
    primary: "#571089",
    background: "#130007",
    text: "#faedcb",
    darkBackground: "#000",
    lightText: "#fff",
    primaryText: "#2ec4b6"
  }
}

export const ThemeContext = createContext(lightTheme);

const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState(lightTheme);
  return <ThemeContext.Provider value={[theme,setTheme]}> {children} </ThemeContext.Provider>
};

export default ThemeProvider;
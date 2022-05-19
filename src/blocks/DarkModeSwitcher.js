import { useContext } from "react"
import styled from "styled-components";
import { ButtonSecondary } from "../collections/Buttons";
import { ThemeContext } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../contexts/ThemeContext";


const DarkModeSwitcher = ({ className }) => {
  let [theme, setTheme] = useContext(ThemeContext);

  console.log(theme);

  let switchTheme = () => {
    let newTheme = theme.type === "light" ? darkTheme : lightTheme;
    
    setTheme(newTheme);
  }

  return (
    <ButtonSecondary className={className} onClick={switchTheme}>
      Cambiar a modo
      {
        theme.type === "light" ? " oscuro" : " claro"
      }
    </ButtonSecondary>
  )
};

export default styled(DarkModeSwitcher)`
  
`;
import React, { useState } from "react"
import { GlobalStyle } from "./style/GlobalStyle"
import Fundo from "./Fundo"
import Home from "./page/Home"
import { SearchInput } from "./context/AddInput"
import { ThemeProvider } from "styled-components"
import { DarkTheme, LightTheme } from "./style/themes/Theme"

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


const App = () => {
  
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>

      <GlobalStyle />
      <SearchInput>
        <Fundo theme={theme}/>
        <Home theme={theme} setTheme={setTheme} />
      </SearchInput>
    </ThemeProvider>
  )
}
export default App

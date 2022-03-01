import React from "react"
import { GlobalStyle } from "./style/GlobalStyle"
import Fundo from "./Fundo"
import Home from "./page/Home"
import { SearchInput } from "./context/AddInput"

const App = () => {
  return (

    <SearchInput>
      <GlobalStyle />
      <Fundo />
      <Home />
    </SearchInput>
  )
}
export default App

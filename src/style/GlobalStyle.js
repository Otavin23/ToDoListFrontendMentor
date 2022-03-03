import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,400;1,600&display=swap');
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
      background-color:  ${(props)=> props.theme.color.background};
      color: ${(props)=> props.theme.color.text};

      margin: 0;  
  }
  
`

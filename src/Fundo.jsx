import React from "react"
import styled from "styled-components"
import dark from './assets/bg-desktop-dark.jpg'
import light from "./assets/bg-desktop-light.jpg"

const FundoImg = styled.div`
    background-image: url(${props => props.imagem});
    width: 100%;
    height: 40vh;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 375px){
    }
`


const background = ({theme})=>{    
    console.log(dark)
    console.log(theme)
    return (
        <>
        {theme === "dark" ? <FundoImg imagem={dark} />:<FundoImg imagem={light}/>}
        </>
    )
}
export default background
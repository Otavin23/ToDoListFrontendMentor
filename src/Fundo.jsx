import React from "react"
import styled from "styled-components"
import dark from "./bg-desktop-dark.jpg"

const FundoImg = styled.div`
    background-image: url(${props => props.image});
    width: 100%;
    height: 40vh;
`


const background = ()=>{
    return (
        <FundoImg image={dark} />
    )
}
export default background
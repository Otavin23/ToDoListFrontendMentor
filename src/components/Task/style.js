import styled from "styled-components"

export const Container = styled.div`
display: flex;
align-items: center;
padding: 1rem 0;
border-bottom: 1px solid hsl(233, 18%, 38%);
` 
export const Estilizacao = styled.div`
display: flex;
align-items: center;
button{
    border: 1px solid hsl(234,11%,52%);
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    margin: 0px 1rem 0px 1rem;
    &:hover{
        cursor: pointer;
    }
    &.active{
        background-image:linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }
}
p{
    color:  hsl(233, 11%, 84%);
    font-size: 14px;
}
`
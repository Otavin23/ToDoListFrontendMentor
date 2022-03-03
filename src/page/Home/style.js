import styled from "styled-components"

export const Main = styled.main`
  width: 40%;
  height: 10rem;
  margin-top: -210px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 425px){
      width: 90%;
  }
  
`
export const NomeETema = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    text-transform: uppercase;
    color: hsl(0, 0%, 98%);
    letter-spacing: 15px;
  }
  button {
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`
export const bgInput = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  height: 50px;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  button {
    border: 1px solid hsl(234, 11%, 52%);
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    margin: 0px 1rem 0px 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    background: transparent;
    outline: none;
    border: none;
    color: hsl(233, 11%, 84%);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    width: 350px;

    &::placeholder {
      color: hsl(234, 11%, 52%);
      font-size: 14px;
      font-weight: 400;
    }
  }
`

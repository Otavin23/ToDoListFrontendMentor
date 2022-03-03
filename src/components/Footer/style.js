import styled from "styled-components"

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.color.cardBackground};
  border-bottom-left-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  box-shadow: 0px 4px 15px ${props => props.theme.color.shadow};
`
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,400;1,600&display=swap");

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  font-size: 14px;
  color: hsl(234, 11%, 52%);

  .items {
    margin: 0px 0.5rem 0px 1rem;
  }
  .activesAll {
    display: flex;
    button{
      margin-right: 0.5rem;
      font-weight: 400;
      border: none;
      background: transparent;
      color: hsl(234, 11%, 52%);

      &:hover{
        color: hsl(236, 33%, 92%);
            cursor: pointer;
        }
    }
    .active{
        color: #3a7bfd;
    }
  }
  .clear {
    margin: 0px 1rem 0px 0rem;
    border: none;
    background: transparent;
    color: hsl(234, 11%, 52%);

    &:hover{
        color: hsl(236,33%,92%);
        cursor: pointer;
    }
  }
`

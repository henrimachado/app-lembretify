//Lib imports
import styled from "styled-components"

export const LembretesFeedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .lembretes {
      overflow-y: scroll;
      max-height: 355px;
      flex-grow: 1;
  }

  h2 {
      font-size: var(--fs-300);
  }

  h3 {
    font-size: var(--fs-200);
  }

  ::-webkit-scrollbar{
    background-color: transparent;
    width: 5px;
    margin-left: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:  var(--secondary);
    border-radius: 0.2em;
  }

  @media (max-height: 740px){
    .lembretes {
      max-height: 200px;
    }
          
    h2 {
      font-size: var(--fs-400);
    }

    .sem-lembretes{
      font-size: var(--fs-200);
    }

  }

`
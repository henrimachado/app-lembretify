//Lib imports
import styled from "styled-components"

export const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    align-items: center;

    .logo{
        width: 70%;
        max-width: 600px;
        margin-bottom: 10px;

    }

    h2 {
      font-size: var(--fs-300);
  }


    @media (max-height: 920px){
        max-height: 100vh;
        h2 {
            font-size: var(--fs-200);
        }

    }

    
`
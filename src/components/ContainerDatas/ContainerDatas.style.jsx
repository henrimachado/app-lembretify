//Lib imports
import styled from "styled-components"

export const ContainerDatasStyled = styled.div`
    width: 340px;
    margin-right: 5px;
    padding: 5px 20px 20px 20px;
    border-radius: 0.5em;
    margin-bottom: 10px;
    background: var(--primary);

    @media (max-width: 480px){
        width: 230px;
    }

    @media (max-height: 920px){
        h3 {
            font-size: var(--fs-200);
        }
    }

`
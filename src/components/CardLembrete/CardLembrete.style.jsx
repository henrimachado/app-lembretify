//Lib imports
import styled from "styled-components"

export const CardLembreteStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--secondary);
    border-radius: 0.3em;
    margin: 10px auto;
    padding: 0 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01); /* Sombra discreta */

    p {
        flex: 1;
        max-width: 80%;
        color: #F7F7F7;
    }
    .delete-btn {
        color: var(--folly);
    }

    .delete-btn:hover{
        color: var(--red-ncs);
    }

    @media (max-width: 480px){
        font-size: var(--fs-200);
    }

    @media (max-height: 920px){
        p {
            font-size: var(--fs-200);
        }

        .icon{
            width: 85%;
        }

    }
`
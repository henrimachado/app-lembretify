//Lib imports
import styled from "styled-components"

export const LembretesFormsStyled = styled.form`
    background: var(--primary);
    width: 340px;
    padding: 20px;
    border-radius: 0.5em;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction:column;
    }

    input[type=text] {
        width: 320px;
        min-height: 30px;
        border: none;
        padding: 5px 10px;
        background: var(--secondary);
        font-size: var(--fs-200);
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
        Oxygen, Ubuntu, Cantarell,   sans-serif;
    }

    input[type=date] {
        width: 320px;
        min-height: 30px;
        border: none;
        padding: 5px 10px;
        background: var(--secondary);
        font-size: var(--fs-200);
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
        Oxygen, Ubuntu, Cantarell,   sans-serif;
    }


    input, select::placeholder{
        font: "inherit";
        font-size: var(--fs-300);
        color: grey;
    }

    input[type=text], input[type=date]:focus{
    color: white;
    outline: none;
    }


    label{
        font-size: var(--fs-350);
        font-weight: bold;
    }

    input::-webkit-datetime-edit-day-field:focus,
    input::-webkit-datetime-edit-month-field:focus,
    input::-webkit-datetime-edit-year-field:focus {
        background-color: var(--dark);
        color: white;
        outline: none;
    }

    button {
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        background: var(--satib-sheen-gold);
        border-radius: 0.3em;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover{
        background: var(--dark-goldenrod);
    }

    @media (max-width: 480px){
        input[type=text]{
            width: 200px;
        }

        input[type=date]{
            width: 200px;
        }

        width: 230px;
    }

    @media (max-height: 920px){
        h2 {
            font-size: var(--fs-400);
        }

        label {
            font-size: var(--fs-200);
        }

        input {
            font-size: var(--fs-200);;
        }

        input::placeholder, select::placeholder{
            font-size: var(--fs-200);
        }

        button {
            font-size: var(--fs-200);
            width: 98%;
        }

    }
`
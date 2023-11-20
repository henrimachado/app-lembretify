//Lib imports
import styled from "styled-components"

export const CustomToastStyled = styled.div`

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  top: 20px;
  right: 20px;
  background-color: var(--primary);
  color: var( --white);
  font-family:"Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
    Oxygen, Ubuntu, Cantarell,   sans-serif;
  border-radius: 4px;
  font-size: var(--fs-200);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  .errorIcon {
    color: var(--folly);
  }

  .sucessIcon{
    color: #038a7f;
  }
  .CustomToast.hidden{
    opacity: 0;
  }
  @media (max-height: 740px){
    p {
      font-size: var(--fs-200);
    }

  }
`
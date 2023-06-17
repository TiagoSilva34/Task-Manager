import styled from "styled-components"

export const Container = styled.div `
 .animate {
    transition: 1s;
    opacity: .3;
  }
`
export const Li = styled.li `
  width: 100%;

  margin: 12px 0;

  background-color: rgb(27, 4, 4);

  padding: 8px;

  justify-content: space-between !important;
  
  color: #f5f5f5;

  transition: 1s;
  opacity: 1;
  
  .completed {
    text-decoration: line-through;
  }

  > div {
    display: flex;
    align-items: center;
    
    button {
      background-color: transparent;

      svg {
        color: red;
        font-size: 1.5rem;
      }
    }
  }

  
  .title-and-date {
    align-items: flex-start;
  }
` 
import styled from "styled-components"

export const FormContainer = styled.form `
  width: 100%;
  max-width: 800px;

  justify-content: space-around;

  background-color: #1b0404;

  #form-add-task {
    justify-content: space-around !important;
  }

  #input-title {
    width: 60% !important;
  }

  #select-priority {
    width: 30% !important;
    margin-right: 10px;
  }

  .disable.btn-add {
    font-size: 1.2rem;
    padding: 10px;
    width: 40px;
    border-radius: 50%;
    background-color: #ccc;
  }

  .btn-add {
    font-size: 1.2rem;
    padding: 10px;
    width: 40px;
    border-radius: 50%;
    background-color: #f1c40f;
  }

  @media (min-width: 900px) {
    padding: .8rem;

    
  }
` 

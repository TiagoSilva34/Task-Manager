import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: auto;

    background-color: #181717;
    
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;

    padding: 1rem;
  }

  button, input, select {
    border: 0;
  }

  a, button {
    cursor: pointer
  }

  .d-flex-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .d-flex-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .font-weight-100 {
    font-weight: 100;
  }

  .font-weight-400 {
    font-weight: 400;
  }

  .font-weight-700 {
    font-weight: 700;
  }

  .default-text-color {
    color: #f5f5f5;
  }

  .mt, .mb, .mr, .ml {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .pt, .pb, .pr, .pl  {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .border-radius {
    border-radius: 5px;
  }
`
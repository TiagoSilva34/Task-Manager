import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;

  form {
    background-color: transparent;
    width: 100%;

    > button {
      color: #fff;
      background-color: #07bc0c;
      width: 200px;
    } 

    .info {
      justify-content: space-between;
    }

    .visibilityIcon,
    .visibilityIconOff {
      font-size: 2rem;
      position: absolute;
      top: 194px;
      right: 25px;
      cursor: pointer;

      path {
        color: #fff;
      }
    }
  }

  @media (min-width: 900px) {
    .visibilityIcon,
    .visibilityIconOff {
      right: 580px !important;
      top: 204px !important;
    }
  }
`

export const Title = styled.h1 `
  color: #f5f5f5;
  font-size: 2.5rem;
  text-align: center;
`

export const Text = styled.p `
  font-size: 1rem;
  color: #fff;
`

export const Link = styled.a `
  
`

export const Box = styled.div `
  position: relative;
  width: 100%;

  input {
      background-color: transparent;
      border: 1px solid #5ac8fa;

      width: 100%;

      margin: 24px 0;
      padding-left: 3rem;

      color: #f5f5f5;
  }

  svg {
    font-size: 2rem;
    position: absolute;
    top: 30px;
    left: 5px;

    path {
      color: #fff;
    }
  }

`
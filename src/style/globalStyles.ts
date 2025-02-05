import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #bbe5f6;
  }
  ul,li {
    list-style: none;
  }
  input, textarea {
    outline: none;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;
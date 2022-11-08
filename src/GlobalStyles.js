import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}
body{
    font-family: 'Inter', sans-serif;
}
@font-face {
    font-family: 'Inter', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Nanum+Gothic&family=Yeon+Sung&display=swap');
    font-weight: normal;
    font-style: normal;
}
body {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background-color: #Fff;

    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size:20px;
  }

  button,input {
    cursor: pointer;
    padding: 0;
    font-family:inherit;
    font-weight:bold;
  }
  
  
`;
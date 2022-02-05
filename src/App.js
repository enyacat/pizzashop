import { createGlobalStyle } from "styled-components"
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }

`

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Pizza 2 Go</h1>
      <div>Hello Pizza2go</div>
    </>
  );
}

export default App;

import React from "react";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Login } from "./container";
import theme from './theme'

function App() {
  return (
      <ChakraProvider>
          <ColorModeScript initialColorMode="dark" />
          <Login  />
      </ChakraProvider>
  );
}

export default App;

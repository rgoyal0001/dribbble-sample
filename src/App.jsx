import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import {Route,Routes} from 'react-router-dom';
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
import Login from './pages/LogIn/login';
import LoginEmail from './pages/LogIn/loginEmail';
import Register from './pages/Register/Register';
import {Goal} from './pages/Goal/Goal';

function App() {
  return (
    // <ChakraProvider theme={theme}>
      
      <Routes>
        <Route path='/login/phone' element={<Login />}></Route>
        <Route path='/login' element={<LoginEmail />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/goal' element={<Goal />}></Route>
      </Routes>
    //  </ChakraProvider> 
  );
}

export default App;
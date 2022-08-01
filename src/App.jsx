import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { Explore } from './components/Explore';
import { Subscription } from "./components/Subscription";
import { Payment } from "./components/Payment";
import { Goal } from './pages/Goal/Goal';
import { Goals } from './pages/Goal/Goals';
import Navbar from './components/Navbar';

function App() {
  return (<>
    <Navbar />

    <Routes>
      <Route path="/" element={<Explore />}></Route>
      <Route path='/login/phone' element={<Login />}></Route>
      <Route path='/login' element={<LoginEmail />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path="/goal/subscription/:title" element={<Subscription />}></Route>
      <Route path='/goals/full-stack-development' element={<Goals />}></Route>
      <Route path='/goal/payment' element={<Payment />}></Route>

      <Route path='/goal/:title' element={<Goal />}></Route>


    </Routes>

  </>
  );
}

export default App;

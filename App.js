import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/navigation/Index';
import { HomeBuyer } from './src/screens/buyer/HomeBuyer';

export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}


      
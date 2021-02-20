import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md

// Firebase Functions emulator is different compared to production.
// https://firebase.google.com/docs/functions/local-emulator#instrument_your_app_for_https_functions_emulation
function setupEndpoint(): string {
  // CreateReactApp replaces process.env.* values at build time.
  // Local

  // Production

  return process.env.NODE_ENV === 'development' ? '/us-central1' : ''
}

export function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="c/*" element={<p>Users</p>} />
          <Route path="/about*" element={<p>About</p>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

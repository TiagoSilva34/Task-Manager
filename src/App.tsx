import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes/app.routes';
import GlobalStyles from './styles/global.styles';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;

// src/App.js
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import theme from './assets/styles/theme'; // Import the default export

const App = () => {
  const [mode, setMode] = useState('light');
  
  // Create the current theme by extending the base theme
  const currentTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode,
    },
  });

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:category" element={<Home />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
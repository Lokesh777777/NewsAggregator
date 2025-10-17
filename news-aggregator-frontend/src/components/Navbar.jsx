import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ toggleTheme, mode }) => {
  return (
    <AppBar position="static" elevation={0} sx={{ py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              mr: 4
            }}
          >
            NewsHub
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <SearchBar />
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <ThemeToggle toggleTheme={toggleTheme} mode={mode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
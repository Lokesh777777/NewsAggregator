import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: '50px',
            backgroundColor: 'background.paper',
          }
        }}
        sx={{
          maxWidth: '600px',
          '& .MuiOutlinedInput-root': {
            paddingLeft: '12px',
          }
        }}
      />
    </form>
  );
};

export default SearchBar;
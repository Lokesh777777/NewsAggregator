import { Button, ButtonGroup, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'general', name: 'General' },
  { id: 'business', name: 'Business' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'science', name: 'Science' },
  { id: 'sports', name: 'Sports' },
  { id: 'technology', name: 'Technology' }
];

const CategoryFilter = ({ currentCategory }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 3, overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <ButtonGroup variant="text" aria-label="news categories">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => navigate(`/category/${category.id}`)}
            color={currentCategory === category.id ? 'primary' : 'inherit'}
            sx={{ 
              textTransform: 'none',
              fontWeight: currentCategory === category.id ? 600 : 400
            }}
          >
            {category.name}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default CategoryFilter;
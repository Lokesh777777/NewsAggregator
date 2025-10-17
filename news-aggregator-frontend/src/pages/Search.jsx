import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, Box, CircularProgress, Typography, Container } from '@mui/material';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/news/search', {
          params: {
            query,
            sortBy: 'publishedAt',
            pageSize: 50
          }
        });
        setArticles(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchNews();
    }
  }, [query]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        Error: {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Search Results for: "{query}"
      </Typography>
      
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Search;
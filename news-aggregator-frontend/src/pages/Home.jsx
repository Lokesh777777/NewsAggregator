import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, CircularProgress, Typography, Container } from '@mui/material';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/news/headlines', {
          params: {
            country: 'us',
            category: category || 'general'
          }
        });
        setArticles(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

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
      <CategoryFilter currentCategory={category} />
      
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
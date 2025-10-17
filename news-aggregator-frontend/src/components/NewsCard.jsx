import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { format } from 'date-fns';
import { useTheme } from '@emotion/react';

const NewsCard = ({ article }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="200"
          image={article.urlToImage}
          alt={article.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
          <Chip 
            label={article.source?.name} 
            size="small" 
            sx={{ 
              backgroundColor: theme.palette.mode === 'dark' ? 
                theme.palette.grey[800] : theme.palette.grey[200] 
            }} 
          />
          {article.author && (
            <Chip 
              label={article.author} 
              size="small" 
              sx={{ 
                backgroundColor: theme.palette.mode === 'dark' ? 
                  theme.palette.grey[800] : theme.palette.grey[200] 
              }} 
            />
          )}
        </Box>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {article.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {format(new Date(article.publishedAt), 'MMM d, yyyy - h:mm a')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
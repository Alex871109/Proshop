import { Grid, Typography, CircularProgress, Box } from '@mui/material';
import Product from '../components/Product';
import { useGetProductsQuery } from '../store';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  const { data: products, error, isLoading } = useGetProductsQuery();

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          color: '#333',
        }}
      >
        {error ? 'Server error' :' Recent Products'}
      </Typography>
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            minHeight: '80vh',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {products && (
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;

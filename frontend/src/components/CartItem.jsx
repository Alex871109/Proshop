import { Box, Grid, Typography, Rating } from '@mui/material';
import React from 'react';

const CartItem = ({ product }) => {
  return (
    <Box>
      <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: '90%', height: 'auto', marginTop: '4px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: 'inherit' }}
            >
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: '6em' }}
            >
              {product.description}
            </Typography>
            <Box display="flex" alignItems="center" gutterBottom>
              <Rating
                name="rating"
                value={product.rating}
                readOnly
                precision={0.5}
              />
              <Typography variant="body3" color="text.secondary" ml={3}>
                {' '}
                {product.numReviews} reviews
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mt={2}>
              €{product.price}
            </Typography>
          </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;

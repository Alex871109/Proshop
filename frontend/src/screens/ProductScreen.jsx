import { Rating, Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import QuantitySelect from '../components/QuantitySelect';
import { addToCart, useGetProductByIdQuery } from '../store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Notification from '../components/Notification';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const { id: productId } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: quantity }));
    navigate('/cart');
  };

  return (
    <>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" color="inherit" sx={{ margin: '5px 0' }}>
          Go Back
        </Button>
      </Link>
      {isLoading && <Loader />}
      {error && (
        <Notification
          type={'error'}
          message={error?.data?.message || error.error}
        />
      )}
      {product && (
        <Paper elevation={3} sx={{ padding: '2px', marginTop: '4px' }}>
          <Grid container sx={{ margin: '10px' }}>
            <Grid item xs={12} md={6}>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: '90%', height: 'auto', marginTop: '4px' }}
              />
            </Grid>
            <Grid item md={6} padding={4}>
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

              <Box display="flex" alignItems="center" gutterBottom>
                <Typography variant="h6"> Status: </Typography>
                <Typography variant="h7" ml={3}>
                  {' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" mt={2}>
                <Button
                  disabled={product.countInStock < 1}
                  onClick={addToCartHandler}
                >
                  {' '}
                  Add to Cart
                </Button>
                {product.countInStock > 0 && (
                  <QuantitySelect
                    quantity={product.countInStock}
                    value={quantity}
                    setValue={setQuantity}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default ProductScreen;

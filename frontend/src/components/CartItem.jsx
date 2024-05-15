import { Box, Grid, Typography, Rating, Button } from '@mui/material';
import { useState } from 'react';
import QuantitySelect from './QuantitySelect';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.qty);

  const dispatch = useDispatch();

  const setQtyHandler = (qtySelected) => {
    setQuantity(qtySelected);
    dispatch(addToCart({ ...product, qty: qtySelected }));
  };

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

          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body2" color="text.secondary" mt={2} mr={2}>
              €{product.price}
            </Typography>
            <QuantitySelect
              quantity={product.countInStock}
              value={quantity}
              setValue={setQtyHandler}
            />
            <Button> Delete </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;

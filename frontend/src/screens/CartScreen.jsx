import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log('cartItemns: ', cartItems);
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          color: '#333',
          marginBottom: '2rem',
        }}
      >
        Shopping Cart
      </Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => {
            return <CartItem key={item._id} product={item} />;
          })}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: 'inherit' }}
          >
            Subtotal (5 items): $2,299.95
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartScreen;

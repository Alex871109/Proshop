import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartTotals } from '../hooks/useCartTotals';

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const { totalQty, totalPrice } = useCartTotals(cartItems);

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
      <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" color="inherit" sx={{ margin: '5px 0' }}>
          Go Back
        </Button>
      </Link>
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
            Subtotal ({totalQty} items): €{totalPrice}
          </Typography>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="primary">
              Proceed to checkout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CartScreen;

import { Grid, Typography } from '@mui/material';
import Product from '../components/Product';
import Notification from '../components/Notification';
import { useGetProductsQuery } from '../store';
import Loader from '../components/Loader';
import { CART_URL } from '../constants';
import { useState, useEffect } from 'react';

const HomeScreen = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    if (confirmation) {
      setTimeout(() => {
        setConfirmation(false);
      }, 3000);
    }
  }, [confirmation]);

  return (
    <>
      {confirmation && <Notification type={'success'} message={'Item added'} />}
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
        {error ? 'Server error' : ' Recent Products'}
      </Typography>

      {isLoading && <Loader />}

      {products && (
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} md={6} lg={4} xl={3}>
              <Product
                product={product}
                qty={1}
                productLink={`/product/${product._id}`}
                cartLink={CART_URL}
                setConfirmation={setConfirmation}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;

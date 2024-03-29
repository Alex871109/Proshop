import { Grid, Typography } from '@mui/material';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <Typography variant='h3'gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: '#333'  }}>Recent Products</Typography>
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;

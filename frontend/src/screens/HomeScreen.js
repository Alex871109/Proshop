import { Grid, GridItem } from '@mui/material';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
    <h1>Welcome to Proshop</h1>
      <h1>Recent Products</h1>
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

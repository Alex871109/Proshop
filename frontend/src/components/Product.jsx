import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Rating,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

const Product = ({ product, qty, productLink, setConfirmation }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: qty }));
    setConfirmation(true);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <Link to={productLink} style={{ textDecoration: 'none', color: 'black' }}>
        <CardActionArea>
          <CardMedia component="img" image={product.image} alt={product.name} />

          <CardContent>
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
              sx={{ maxHeight: '6em', overflow: 'clip' }}
            >
              {product.category}
            </Typography>
            <Box display="flex" alignItems="center">
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
            <Typography variant="body2" color="text.secondary">
              €{product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={product.countInStock < 1}
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;


import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Rating } from '@mui/material';

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
     <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <CardActionArea>
   
        <CardMedia
          component="img"
         
          image={product.image}
          alt={product.name}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'inherit' }}>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" sx={{ maxHeight: '6em', overflow: 'clip' }}>
            {product.category}
          </Typography>
          <Box display="flex" alignItems="center" >
          <Rating name="rating" value={product.rating} readOnly precision={0.5} />
          <Typography variant="body3" color="text.secondary" ml={3}> {product.numReviews} reviews</Typography>
          </Box>
          <Typography  variant="body2" color="text.secondary" >
            €{product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

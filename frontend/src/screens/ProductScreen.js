import products from "../products"
import {Rating, Box, Grid, Paper, Typography} from "@mui/material"
import { useParams } from "react-router-dom"

const ProductScreen = () => {
    const {id: productId}= useParams();
        const product= products.find((p)=> p._id===productId);
        
  return (
   
    <Paper elevation={3} sx={{padding:"2px", marginTop:"4px"}}>
      <Grid container sx={{ margin: "10px" }}>
        <Grid item xs={12} md={6} >
          <img src={product.image} alt={product.name} style={{ maxWidth: "90%", height: "auto",marginTop:"4px" }}/>
        </Grid>
        <Grid item md={6}  padding={4}>
        <Typography gutterBottom variant="h5" component="div" style={{ color: 'inherit' }}>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary"  sx={{ maxHeight: '6em' }}>
            {product.description}
          </Typography>
          <Box display="flex" alignItems="center" gutterBottom >
          <Rating name="rating" value={product.rating} readOnly precision={0.5} />
          <Typography variant="body3" color="text.secondary" ml={3}> {product.numReviews} reviews</Typography>
          </Box>
          <Typography  variant="body2" color="text.secondary" mt={2} >
            €{product.price}
          </Typography>

          <Box display="flex" alignItems="center" gutterBottom >
          <Typography variant="h6" > Status: </Typography>
          <Typography variant="h7"  ml={3}> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Typography>
          </Box>
          
        </Grid>

      </Grid>
    </Paper>
    
  )
}

export default ProductScreen
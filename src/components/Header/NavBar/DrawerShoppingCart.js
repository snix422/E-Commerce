import { Drawer,Box,Typography,Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState,useContext } from "react";
import CartContext from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const DrawerShoppingCart = ({stateDrawerCart,changeStateDrawerCart}) => {
    const {addToCart, removeFromCart, items, totalPrice, removeAllItemsCart} = useContext(CartContext);
    const [refresh, setRefresh] = useState(false);
    return(
        <Drawer anchor='right' open={stateDrawerCart} >
        <Box sx={{width:{
          xl:'30vw',
          lg:'30vw',
          md:'40vw',
          sm:'50vw',
          xs:'60vw'
        }}}>
            <Box sx={{display:'flex', marginTop:'20px', marginLeft:'10px'}}>
              <ArrowBackIcon sx={{marginTop:'5px'}} onClick={()=>{changeStateDrawerCart(false)}}></ArrowBackIcon>
              <Typography  sx={{fontFamily:'Montserrat', fontSize:'25px', marginLeft:'5px'}}>Twój koszyk</Typography>
            </Box>
             {items ? items.map((product)=>{
              console.log(product);
                return(
                  <Box style={{marginTop:'50px', marginLeft:'10px'}}>
                  <Box sx={{display:'flex', alignItems:'center'}}>
                  <img src={product.image} style={{width:'75px', height:'75px'}}></img>
                  <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                    <Typography sx={{fontFamily:'Montserrat'}}>{product.name}</Typography>
                    <Box sx={{display:'flex', gap:'5px'}}>
                      <RemoveIcon className="cursorEffect" color='error' onClick={()=>{removeFromCart(product.id)
                        setRefresh(!refresh)}}></RemoveIcon>
                      <Typography sx={{fontFamily:'Montserrat'}}>{product.quantity}</Typography>
                      <AddIcon className="cursorEffect" color="success" onClick={()=>{addToCart(product.id,product.name,product.price)
                      setRefresh(!refresh)
                      console.log('12')}}></AddIcon>
                    </Box>
                   
                  </Box>
                  <Typography sx={{marginLeft:'65px', fontFamily:'Montserrat'}}>Cena: {product.price} zł/szt</Typography>
                  <DeleteIcon sx={{marginLeft:'20px'}}></DeleteIcon>
              </Box>
              </Box>
                )
            }):null}
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography sx={{textAlign:'center', marginTop:'50px', fontSize:'25px', fontFamily:'Montserrat'}}>Do zapłaty: {totalPrice}zł </Typography>
            <Link to='/acceptbuy'><Button variant="contained" color="success" sx={{marginTop:'20px', fontFamily:'Montserrat'}} onClick={()=>{removeAllItemsCart()
             setRefresh(!refresh)
            }}>Zapłać</Button></Link>
            </Box>
        </Box>
      </Drawer>
    )
}

export default DrawerShoppingCart
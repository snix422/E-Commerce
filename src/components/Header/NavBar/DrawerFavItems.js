import { Drawer,Box,Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState,useContext } from "react";
import CartContext from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const DrawerFavItems = ({stateDrawerFav,changeStateDrawerFav}) => {
    const {favItems,removeFav} = useContext(CartContext);
    const [refresh, setRefresh] = useState(false);

    return(
        <Drawer anchor='right' open={stateDrawerFav} >
        <Box sx={{width:{
          xl:'30vw',
          lg:'30vw',
          md:'40vw',
          sm:'50vw',
          xs:'60vw'
        }}}>
          <Box sx={{display:'flex', marginTop:'20px', marginLeft:'10px'}}>
              <ArrowBackIcon sx={{marginTop:'5px'}} onClick={()=>{changeStateDrawerFav(false)}}></ArrowBackIcon>
              <Typography  sx={{fontFamily:'Montserrat', fontSize:'25px', marginLeft:'5px'}}>Twoje Ulubione</Typography>
            </Box>
      </Box>
      {favItems ? favItems.map((product)=>{
              console.log(product);
                return(
                  <Box style={{marginTop:'50px', marginLeft:'10px'}}>
                  <Box sx={{display:'flex', alignItems:'center'}}>
                  <Link style={{textDecoration:'none', color:'black', display:' flex', flexDirection:'column', alignItems:'center'}} to={"product/" + product.id}>
                  <img src={product.image} style={{width:'75px', height:'75px'}}></img></Link>
                  <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                    <Typography sx={{fontFamily:'Montserrat'}}>{product.name}</Typography>
                  </Box>
                  <Typography sx={{marginLeft:'65px', fontFamily:'Montserrat'}}>Cena: {product.price} zł/szt</Typography>
                  <DeleteIcon className="cursorEffect" onClick={()=>{removeFav(product.id)
                  setRefresh(!refresh)}} sx={{marginLeft:'20px'}}></DeleteIcon>
              </Box>
              </Box>
                )
            }):null}
      </Drawer> 
    )
}

export default DrawerFavItems
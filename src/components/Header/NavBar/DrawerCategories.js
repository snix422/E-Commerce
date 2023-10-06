import { Drawer,Box,Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const DrawerCategories = ({stateBurger,changeStateBurger}) => {

    const categories = [
        {path:'/headphones', label: 'Słuchawki'},
        {path:'/mouse', label:'Myszki gamingowe'},
        {path:'/mousepad', label:'Podkładki'},
        {path:'/keyboard', label:'Klawiatury'}
    ]
    
    return(
        <Drawer anchor='right' open={stateBurger} >
        <Box sx={{width:{
          xl:'30vw',
          lg:'30vw',
          md:'40vw',
          sm:'50vw',
          xs:'60vw'
        }}}>
          <Box sx={{display:'flex', marginTop:'20px', marginLeft:'10px'}}>
              <ArrowBackIcon sx={{marginTop:'5px'}} onClick={()=>{changeStateBurger(false)}}></ArrowBackIcon>
              <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography  sx={{fontFamily:'Montserrat', fontSize:'25px', marginLeft:'5px'}}>Kategorie</Typography>
              {categories.map((category=>{
                    return(
                        <Link to={'/category' + category.path} className="link">{category.label}</Link>
                    )
                }))}
                </Box>
            </Box>
      </Box>
      </Drawer> 
    )
}

export default DrawerCategories 
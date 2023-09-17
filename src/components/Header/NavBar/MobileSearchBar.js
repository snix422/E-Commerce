import { Box, InputBase, Paper,IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const MobileSearchBar = ({ stateBurger }) => {
    return ( 
        <Box sx = {
            { width: '100vw', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', top:0,background:'white', zIndex:10 } } > 
        <Paper component={'form'} sx={{marginRight: {
            xl: '400px',
            lg: '300px',
            md:'200px',
            sm:'80px',
            xs:'30px'
          }, marginLeft: {
            xl: '400px',
            lg: '300px',
            md:'200px',
            sm:'80px',
            xs:'30px'
          }, borderRadius: '25px', marginBottom:'5px', position:'relative', maxHeight:'40px', marginTop:'80px',}}>
              <InputBase sx={{borderRadius: '50%',width: {
                xl:'550px',
                lg:'400px',
                md:'300px',
                sm:'230px',
                xs:'250px'
              }, paddingLeft:'20px'}} placeholder='Search...' />
             
              <IconButton sx={{position:'absolute', right:0}}>
                  <SearchIcon />
              </IconButton>
          </Paper>
        </Box>
    )

}

export default MobileSearchBar
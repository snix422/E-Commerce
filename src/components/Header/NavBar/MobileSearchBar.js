import { Box, InputBase, Paper,IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import useSearchParams from "../../../hooks/useSearchParams";

const MobileSearchBar = ({ stateBurger, changedVisibility }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {searchProduct2} = useSearchParams()

    const searchProduct = () => {
     searchProduct2(searchTerm);
     setSearchTerm('');
    }
    return ( 
        <Box sx = {
            { width: '100vw', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position:'relative', top:0,background:'white', zIndex:10} } > 
       <ArrowBackIcon onClick={()=>changedVisibility(prev=>!prev)} sx={{position:'absolute', top:'-130%', left:'1%'}} />
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
          }, borderRadius: '25px', marginBottom:'5px', maxHeight:'40px', position:'absolute', top:'0', marginTop:'-30px'}}>
              <InputBase onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} sx={{borderRadius: '50%',width: {
                xl:'550px',
                lg:'400px',
                md:'300px',
                sm:'230px',
                xs:'250px'
              }, paddingLeft:'20px'}} placeholder='Search...' />
             
              <IconButton sx={{position:'relative'}}>
                  <SearchIcon onClick={searchProduct} sx={{position:'absolute', top:'-20%', right:'20%'}} />
              </IconButton>
          </Paper>
        </Box>
    )

}

export default MobileSearchBar
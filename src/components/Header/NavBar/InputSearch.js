import { Paper, InputBase, IconButton, Box, Container } from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import useSearchParams from "../../../hooks/useSearchParams";


const InputSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [displaySearch, setDisplaySearch] = useState(false);
    const {searchProduct2} = useSearchParams();

    const searchProduct = () => {
     searchProduct2(searchTerm);
     setSearchTerm('');
    }

    const takeSearchTerm = (e) =>{
      setSearchTerm(e.target.value);
    }

    return(
      <>
        <Container sx={{height:'10vh', display:'flex', alignItems:'center'}}>
        <Paper component={'form'} sx={{display:{
            xl:'block',
            lg:'block',
            md:'block',
            sm:'block',
            xs:'none'
          },marginTop:{
            xl:0,
            lg:0,
            md:0,
            sm:0,
            xs:'200px'
          }, borderRadius: '25px', maxHeight:'40px'}}>
              <InputBase onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} sx={{borderRadius: '50%', height:'100%', width: {
                xl:'600px',
                lg:'400px',
                md:'400px',
                sm:'200px',
                xs:'300px'
              }, paddingLeft:'20px', position:'relative'}} placeholder='Search...' />
             <IconButton>
             <SearchIcon onClick={searchProduct}/>
             </IconButton>
             
              
          </Paper>
          </Container>
          <Box>
          {displaySearch ? <IconButton sx={{border:'2px solid red',display:{
              xl:'none',
              lg:'none',
              md:'none',
              sm:'none',
              xs:'none'
            }}}><CloseIcon onClick={()=>{setDisplaySearch(false)}}></CloseIcon></IconButton> : <IconButton sx={{display:{
              xl:'none',
              lg:'none',
              md:'none',
              sm:'none',
              xs:'none'
            }}}><SearchIcon onClick={()=>{setDisplaySearch(true)}}></SearchIcon></IconButton>}
           {displaySearch ? <Paper component={'form'} sx={{marginRight: {
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
          },display:{
            xl:'none',
            lg:'none',
            md:'none',
            sm:'none',
            xs:'none'
          }, borderRadius: '25px', marginBottom:'5px', position:'relative', maxHeight:'40px', marginTop:'80px', border:'2px solid red'}}>
              <InputBase onChange={takeSearchTerm} value={searchTerm} sx={{borderRadius: '50%',width: {
                xl:'550px',
                lg:'400px',
                md:'300px',
                sm:'230px',
                xs:'250px'
              }, paddingLeft:'20px'}} placeholder='Search...' />
             
              <IconButton sx={{position:'absolute', right:0}}>
                  <SearchIcon onClick={searchProduct}/>
              </IconButton>
          </Paper> : null }</Box></>
    )
}

export default InputSearch
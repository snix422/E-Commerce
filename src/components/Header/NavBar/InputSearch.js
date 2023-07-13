import { Paper, InputBase, IconButton } from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const InputSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    return(
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
          },display:{
            xl:'block',
            lg:'block',
            md:'block',
            sm:'block',
            xs:'none'
          }, borderRadius: '25px', maxHeight:'40px'}}>
              <InputBase onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} sx={{borderRadius: '50%', height:'100%', width: {
                xl:'350px',
                lg:'400px',
                md:'300px',
                sm:'230px',
                xs:'120px'
              }, paddingLeft:'20px',}} placeholder='Search...' />
              <IconButton>
                  <SearchIcon onClick={props.searchProduct}/>
              </IconButton>
          </Paper>
    )
}

export default InputSearch
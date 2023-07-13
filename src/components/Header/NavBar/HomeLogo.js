import { IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

const HomeLogo = () => {
    return(
        <IconButton size='large'>
            <Link to="/"><HomeIcon sx={{fontSize:'40px', color:'black'}} /></Link>
        </IconButton>
    )
}

export default HomeLogo
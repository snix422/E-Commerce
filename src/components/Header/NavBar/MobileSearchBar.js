import { Box, InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const MobileSearchBar = ({ stateBurger }) => {
    return ( <
        Box sx = {
            { width: '100%', height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center' } } >
        <
        InputBase sx = {
            {
                height: '100%',
                border: '2px solid black',
                paddingLeft: '20px'
            }
        }
        placeholder = 'Search...' >
        <
        SearchIcon / >
        <
        /InputBase> <
        /Box>
    )

}

export default MobileSearchBar
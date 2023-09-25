import { Stack, IconButton, Box, Typography, MenuItem, Badge, Menu, InputBase } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState, useContext, useEffect } from "react";
import { currentUser } from "../../../../Context/currentUser";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../../../Context/CartContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import './DetailsUser.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { toast } from "react-toastify";
import useAccount from "../../../../hooks/useAccount";


const DetailsUser = ({ changeStateDrawerCart, changeStateDrawerFav, stateDrawerCart, stateDrawerFav, changeMobileSearch, isMobile, changeStateBurger, stateBurger }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [isActive, setIsActive] = useState('noactive');
    //const user = useContext(currentUser);
    const { items, favItems, } = useContext(CartContext);
    const {LogOutUser} = useAccount();

   

    const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(currentUser);


    const handleClose = () => {
        setOpen(!open);
    }

    const handleClick = (event) => {
        setOpen(!open);
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        setIsActive('noactive');
    }, [])

    const logOut = () => {
        /*user.auth = false;
        user.email = "";
        user.password = '';*/
        toast.info('Zostałeś wylogowany');
        handleClose();
        LogOutUser();
    }
    return ( 
        <Stack direction = {'row'} sx = {{ position: 'absolute', right: '2%' }}> 
        {!isMobile ? <Box sx ={{display: {
                        xl: 'none',
                        lg: 'none',
                        md: 'none',
                        sm: 'none',
                        xs: 'block'
                    },marginTop: '5px'}}>
            <IconButton>
            <SearchIcon onClick = { changeMobileSearch }/> 
            </IconButton> 
            </Box> : <Box sx={{display:{
            xl : 'none',
            lg: 'none',
            md: 'none',
            sm: 'none',
            xs: 'block'
        }, marginTop: '10px'
    }}> 
    <CloseIcon onClick = { changeMobileSearch }/> 
    </Box>} 
    <IconButton size='large' sx={{ display: 'flex', flexDirection: 'column' }}>
    <AccountBoxIcon onClick = {handleClick} fontSize = '200px' /> 
    {currentUser ? <Box> <Typography sx = {
        {
            fontFamily: 'Montserrat',
            display: {
                xl: 'block',
                lg: 'block',
                md: 'none',
                sm: 'none',
                xs: 'none'
            }
        }
    }> { currentUser?.email } </Typography>
    <Menu
    anchorEl = { anchorEl }
    id = "basic-menu"
    open = { open }
    onClose = { handleClose } >
    <Link to = "/historypayment"
    className = "link"> <MenuItem className = "link" > Historia Zamówień </MenuItem></Link >
    <Link to = "/" className = "link">
    <MenuItem className = "link" onClick = { logOut }> Wyloguj się </MenuItem></Link >
    <MenuItem onClick = { handleClose } > Zamknij </MenuItem>
    </Menu></Box > : 
    <Menu anchorEl = { anchorEl }
    id = "basic-menu"
    open = { open }
    onClose = { handleClose }>
    <Link to = "/signin" className = "link" sx={{ color: 'black'}}><MenuItem> Zaloguj się </MenuItem></Link>
    <Link to = "/signup" className = "link" ><MenuItem> Załóż konto </MenuItem></Link >
    <MenuItem onClick = { handleClose }> Zamknij </MenuItem> 
    </Menu>} 
    </IconButton> 
    <IconButton size = 'large' >
    <Badge badgeContent = { items.length }
    color = "secondary" > < ShoppingCartIcon fontSize = '200px'
    onClick = {
        () => { changeStateDrawerCart(!stateDrawerCart) } }
    /></Badge >
    </IconButton> 
    <IconButton size = 'large' >
    <Badge badgeContent = { favItems.length }
    color = "secondary" > < FavoriteBorderIcon fontSize = '200px'
    onClick = {
        () => { changeStateDrawerFav(!stateDrawerFav) } }
    /></Badge >
    </IconButton> 
    <IconButton sx = {
        {
            display: {
                xl: 'none',
                lg: 'none',
                md: 'none',
                sm: 'block',
                xs: 'block'
            }
        }
    } >
    <MenuIcon onClick = {
        () => { changeStateBurger(!stateBurger) } }
    /> 
    </IconButton>
</Stack>
)
}

export default DetailsUser
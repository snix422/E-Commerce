import  { AppBar, Box,} from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../../Context/CartContext';
import axios from 'axios'
import HomeLogo from './HomeLogo';
import InputSearch from './InputSearch';
import DetailsUser from './DetailsUser/DetailsUser';
import DrawerShoppingCart from './DrawerShoppingCart';
import DrawerFavItems from './DrawerFavItems';
import MobileSearchBar from './MobileSearchBar';
import DrawerCategories from './DrawerCategories';

const MainNavBar = () => {

   
    const [isDrawerShopOpen, setIsDrawerShopOpen] = useState(false);
    const [isDrawerFavouriteOpen, setIsDrawerFavouriteOpen] = useState(false);
    const [isDrawerBurger, setIsDrawerBurger] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [myProducts, setMyProducts] = useState([]);
    const [isMobileSearch, setIsMobileSearch] = useState(false);
 
    const {items, totalPrice,favItems,} = useContext(CartContext);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    
    if(items){
      localStorage.setItem('totalPrice', Number(totalPrice));
      localStorage.setItem('totalItems', JSON.stringify(items));
    }

    if(favItems){
      localStorage.setItem('favItems', JSON.stringify(favItems));
    }
   
    const navigate = useNavigate();
 
    async function fetch(){
      const res = await axios.get(`https://gamingshop-4b668-default-rtdb.europe-west1.firebasedatabase.app/Products.json`)
        setProducts([res.data]);
    }

    useEffect(()=>{
        fetch();
    },[])

    useEffect(()=>{
      if(products.length>0){
          setMyProducts(products.length > 0 ? Object.values(products[0]) : null);
      }
  },[products])

      const searchProduct = () => {
       if(searchTerm.length === 0) {
        navigate('/')
       }else{
        const item = myProducts.filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchTerm('');
        localStorage.setItem('searchItem', JSON.stringify(item));
        navigate('/search');
       }
      }

      const toggleMobileSearch = () => {
        setIsMobileSearch(!isMobileSearch);
      }
      
    return (
        <AppBar position='static' color='primary' sx={{margin: '0', backgroundColor: 'white', color: 'black', maxHeight: {
          xl:'10vh',
          lg:'10vh',
          md:'10vh',
          sm:'15vh',
          xs:'25vh'
        }, height:{
            xl:'10vh',
            lg:'10vh',
            md:'10vh',
            sm:'15vh',
            xs:'17vh'
        },display: 'flex', flexDirection:'column', justifyContent:  'center', alignItems: 'center', width:'100%'}}>
            <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', visibility: isMobileSearch ? 'hidden' : 'visibility'}}>
            <HomeLogo />
            <InputSearch searchProduct={searchProduct} />  
            <DetailsUser changeStateDrawerCart={setIsDrawerShopOpen} stateDrawerCart={isDrawerShopOpen} changeStateDrawerFav={setIsDrawerFavouriteOpen} stateDrawerFav={isDrawerFavouriteOpen} changeStateBurger={setIsDrawerBurger} stateBurger={isDrawerBurger} changeMobileSearch={toggleMobileSearch} isMobile={isMobileSearch} />
            <DrawerShoppingCart changeStateDrawerCart={setIsDrawerShopOpen} stateDrawerCart={isDrawerShopOpen} />
            <DrawerFavItems changeStateDrawerFav={setIsDrawerFavouriteOpen} stateDrawerFav={isDrawerFavouriteOpen} />
            <DrawerCategories stateBurger={isDrawerBurger} changeStateBurger={setIsDrawerBurger} />
            </Box>
            
            {isMobileSearch && <MobileSearchBar stateBurger={isDrawerBurger} changedVisibility={setIsMobileSearch} />}        
        </AppBar>
    )
}

export default MainNavBar
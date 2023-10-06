import { Typography, Box,Rating, useScrollTrigger } from "@mui/material"
import { Link} from "react-router-dom";
import MainNavBar from "../Header/NavBar/MainNavBar";
import CategoriesNavBar from "../Header/NavBar/CategoriesNavBar";
import Footer from "../Footer/Footer";
import ProductPage from "./ProductPage";
import { useEffect, useState } from "react";

const SearchComponent = () => {
    const [searchItems, setSearchItems] = useState([]);
    const items = JSON.parse(localStorage.getItem('searchItem'));
    const phrase = JSON.parse(localStorage.getItem('phrase'));

    const moveToProductPage = (product) => {
        return <ProductPage product={product} />
    }

    useEffect(()=>{
        setSearchItems(items);
    },[items])

    return(
            <>
            <MainNavBar sx={{minWidth:'100vw'}}/>
            <CategoriesNavBar />
            <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'50vh', gap:'50px'}}>
                <Typography sx={{fontFamily:'Montserrat', fontWeight:'bold', marginTop:'20px', fontSize:'25px', width:'80%', textAlign:'center'}}>Wyniki wyszukiwania dla: {phrase}</Typography>
                <Box sx={{display:'flex', flexDirection:{
                    xl:'row',
                    lg:'row',
                    md:'row',
                    sm:'column',
                    xs:'column'
                }, gap:'20px', flexWrap:'wrap'}}>
                {searchItems.length>0 ? searchItems.map((product)=>{
                    return(
                        <Box  className="product" onClick={() =>moveToProductPage(product)} sx={{display:'flex', flexDirection:'column', alignItems:'center', border: '2px solid rgb(240, 238, 238)', borderRadius:'10px', marginBottom:'20px', width:{
                            xl:'15vw',
                            lg:'20vw',
                            md:'25vw',
                            sm:'45vw',
                            xs:'80vw'
                          }}}>
                            <Link style={{textDecoration:'none', color:'black', display:' flex', flexDirection:'column', alignItems:'center'}} to={"product/" + product.id}>
                          <img className="product-img" style={{width: '200px', height: '200px'}} src={product.image}></img>
                          <Typography  sx={{paddingBottom: '10px', textDecoration:'none', fontFamily:'Montserrat'}}>{product.name}</Typography>
                          <Rating name="read-only" value={5} readOnly></Rating>
                          <Typography sx={{fontFamily:'Montserrat'}}>{product.price} zł</Typography>
                          </Link>
                          </Box>
                    )
                }) : <Typography sx={{fontFamily:'Montserrat', fontSize:'30px'}}>Nie znaleziono produktu</Typography>}
            </Box>
            </Box>
            <Footer />
            </>   
    )
}

export default SearchComponent
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box, Container, Typography,FormGroup, FormControlLabel, Checkbox, InputBase, Rating, Button} from "@mui/material"
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MainNavBar from "../../Header/NavBar/MainNavBar";
import useFilteredProducts from "../../../hooks/useFilteredProducts";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CategoriesNavBar from "../../Header/NavBar/CategoriesNavBar";


 const CategoryPage = () => {
    const [producent, setProducent] = useState({
        Stealseries:false,
        HyperX:false,
        Razer:false
    })
    const [priceOd, setPriceOd] = useState(0);
    const [priceDo, setPriceDo] = useState(0);
    const [status, setStatus] = useState({
        Promocje:false,
        Polecane:false,
        Bestsellers:false,
    })
    const [categoryNameToPolish, setCategoryNameToPolish] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [statusFilters, setStatusFilters] = useState(false);
    
    const {categoryName} = useParams();
    const {data} = useFetch();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    let books = dataFromHook.filter(book => book.categories === categoryName);
    //let {filteredBooks,filteringProducts} = useFilteredProducts();
    const navigate = useNavigate();
    console.log(filteredBooks);
    
    useEffect(()=>{
        if(categoryName === 'headphones' ){
            setCategoryNameToPolish('Słuchawki');
        }else if(categoryName === 'mouse'){
            setCategoryNameToPolish('Myszki');
        }else if(categoryName === 'mousepad'){
            setCategoryNameToPolish('Podkładki');
        }else if(categoryName === 'keyboard'){
            setCategoryNameToPolish('Klawiatury');
        }
    },[])




    const searchProducts = () => {
        /*filteringProducts(priceOd,priceDo,producent,status,books);*/

        const companies = [
            producent.Stealseries && 'Stealseries',
            producent.HyperX && 'HyperX',
            producent.Razer && 'Razer'
        ].filter(Boolean);

        const productStatuses = [
            status.Promocje && 'promocje',
            status.Polecane && 'polecane',
            status.Bestsellers && 'bestsellers'
        ].filter(Boolean);


        const filtered = books.filter((product) =>
            (companies.length ? companies.includes(product.company) : true) &&
            (productStatuses.length ? productStatuses.some((status) => product[status]) : true) &&
            (priceOd ? product.price > priceOd : true) &&
            (priceDo ? product.price < priceDo : true))
        setFilteredBooks(filtered);
        console.log(filtered);
        setPriceOd('');
        setPriceDo('');
        setStatusFilters(true);
    }

    const optionalRendering = filteredBooks.length > 0 ?  filteredBooks.map((product)=>{
        return(
           <Box  className="product" sx={{display:'flex', flexDirection: 'column', alignItems:'center', marginTop:'50px', border: '2px solid rgb(240, 238, 238)', width:{
               xl:'25vw',
               lg:'25vw',
               md:'40vw',
               sm:'50vw',
               xs:'60vw'
           }, minHeight:{
               xl:'40vh',
               lg:'40vh',
               md:'50vh',
               sm:'30vh',
               xs:'30vh'
           }, borderRadius:'15px'}}>
           <Link style={{textDecoration:'none', color:'black', display:' flex', flexDirection:'column', alignItems:'center'}} to={"product/" + product.id}>
           <img className="product-img" style={{width: '200px', height: '200px'}} src={product.image}></img>
           <Typography  sx={{paddingBottom: '10px'}}>{product.name}</Typography>
           <Rating name="read-only" value={5} readOnly></Rating>
           <Typography >{product.price} zł</Typography>
           <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px', marginBottom:'20px', marginTop:'10px'}}>
           <AddShoppingCartIcon sx={{height:'40px', width:'100px'}} />
           <FavoriteBorderIcon sx={{height:'40px', width:'100px'}} />
        </Box>
           </Link>
       </Box>)
   }) : <Typography>Brak wyników</Typography>

    return(
        <>
        <MainNavBar sx={{minWidth: '100%'}}/>
        <CategoriesNavBar />
        <Container sx={{minWidth: '100%', minHeight:'100vh', backgroundColor: 'rgb(240, 238, 238)'}}>
            <Typography sx={{fontFamily: 'Montserrat', color:'black', fontSize:'30px', paddingTop:'30px', textAlign:'center'}}>{categoryNameToPolish}</Typography>
            <Box sx={{display:'flex', flexDirection:{
                xl:'row',
                lg:'row',
                md:'row',
                sm:'column',
                xs:'column'
            }, alignItems:{
                sm:'center',
                xs:'center'
            },}}>
            <Box sx={{minHeight:'65vh', width:{
                xl:'35vw',
                lg:'30vw',
                md:'45vw',
                sm:'75vw',
                xs:'95vw'
            }, backgroundColor: 'white', borderRadius:'10px', marginLeft:{
                xl:'50px',
                lg:'40px',
                md:'30px',
                sm:'10px',
                xs:'2px'

            }, display:'flex', flexDirection:'column', alignItems:"flex-start", paddingLeft:'20px',paddingTop:'30px', marginTop:'20px'}}>
                <Typography sx={{fontSize: '25px', fontFamily: 'Montserrat'}}>Filtry</Typography>
                <Box>
                    <Typography sx={{fontSize: '15px', fontFamily: 'Montserrat', marginTop:'20px'}} >Producent</Typography>
                    <FormGroup>
                    <FormControlLabel  control={<Checkbox onClick={()=>{setProducent(prevState=>{return{...prevState, Stealseries:!producent.Stealseries}})}}/>}  label="Steelseries" />
                        <FormControlLabel  control={<Checkbox onClick={()=>{setProducent(prevState=>{return{...prevState, HyperX:!producent.HyperX}})}} color="secondary"/>} label="HyperX" />
                        <FormControlLabel  control={<Checkbox onClick={()=>{setProducent(prevState=>{return{...prevState, Razer:!producent.Razer}})}} color="error" />} label="Razer" />
                    </FormGroup>
                </Box>
                <Box>
                    <Typography>Cena(zł)</Typography>
                    <Box sx={{display:'flex', marginTop:'5px'}}>
                    <InputBase sx={{border:'1px solid black', borderRadius:'20px', paddingLeft:'10px', width:'150px'}} value={priceOd} onChange={(e)=>{setPriceOd(e.target.value)}} placeholder="od"/>
                    <HorizontalRuleIcon sx={{fontSize:'15px', marginTop:'10px'}} />
                    <InputBase sx={{border:'1px solid black', borderRadius:'20px', paddingLeft:'10px', width:'150px'}} value={priceDo} onChange={(e)=>{setPriceDo(e.target.value)}}placeholder="do"/>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{fontSize: '15px', fontFamily: 'Montserrat', marginTop:'20px'}} >Status</Typography>
                    <FormGroup>
                    <FormControlLabel  control={<Checkbox onClick={()=>{setStatus(prevState=>{return{...prevState, Promocje:!status.Promocje}})}}/>}  label="Promocje" />
                        <FormControlLabel  control={<Checkbox onClick={()=>{setStatus(prevState=>{return{...prevState, Polecane:!status.Polecane}})}} color="secondary"/>} label="Polecane" />
                        <FormControlLabel  control={<Checkbox onClick={()=>{setStatus(prevState=>{return{...prevState, Bestsellers:!status.Bestsellers}})}} color="error" />} label="Bestseller" />
                    </FormGroup>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
                <Button variant="contained" color="secondary" sx={{textAlign:'center', width:'50%', marginBottom:'30px'}} onClick={()=>{searchProducts()}}>Szukaj</Button>
                </Box>
            </Box>
            <Box sx={{width:{
                xl:'60vw',
                lg:'60vw',
                md:'50vw',
                sm:'70vw',
                xs:'75vw'
            }, minHeight:{
                xl:'40vh',
                lg:'40vh',
                md:'50vh',
                sm:'40vh',
                xs:'30vh'
            }, justifyContent:{
                xl:'center',
                lg:'center',
                md:'center',
                sm:'center',
                xs:'center'
            },alignItems:'center',
            backgroundColor:'white', borderRadius:'10px',marginBottom:'30px', display:'flex', flexDirection:{
                xl:'row',
                lg:'row',
                md:'column',
                sm:'column',
                xs:'column'
            }, gap:'20px', flexWrap:'wrap', marginLeft:'30px', marginTop:'50px', paddingTop:'20px', paddingBottom:'20px'}}>
                { statusFilters === false ? books.map((product)=>{
                     return(
                        <Box  className="product" sx={{display:'flex', flexDirection: 'column', alignItems:'center', marginTop:'50px', border: '2px solid rgb(240, 238, 238)', width:{
                            xl:'25vw',
                            lg:'25vw',
                            md:'40vw',
                            sm:'50vw',
                            xs:'60vw'
                        }, minHeight:{
                            xl:'40vh',
                            lg:'40vh',
                            md:'50vh',
                            sm:'30vh',
                            xs:'30vh'
                        }, borderRadius:'15px'}}>
                        <Link style={{textDecoration:'none', color:'black', display:' flex', flexDirection:'column', alignItems:'center'}} to={"product/" + product.id}>
                        <img className="product-img" style={{width: '200px', height: '200px'}} src={product.image}></img>
                        <Typography  sx={{paddingBottom: '10px'}}>{product.name}</Typography>
                        <Rating name="read-only" value={5} readOnly></Rating>
                        <Typography >{product.price} zł</Typography>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px', marginBottom:'20px', marginTop:'10px'}}>
                        <AddShoppingCartIcon sx={{height:'40px', width:'100px'}} />
                        <FavoriteBorderIcon sx={{height:'40px', width:'100px'}} />
                     </Box>
                        </Link>
                    </Box>)
                }) : optionalRendering} 
            </Box>
            </Box>

        </Container>
        </>
    )
 }

 export default CategoryPage
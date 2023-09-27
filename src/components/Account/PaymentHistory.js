import { Container, Typography, TableContainer, TableHead, TableBody, TableCell, TableRow, useStepContext } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import MainNavBar from "../Header/NavBar/MainNavBar";
import CategoriesNavBar from "../Header/NavBar/CategoriesNavBar";
import useFetch from "../../hooks/useFetch";
import useFetchOrders from "../../hooks/useFetchOrders";

const PaymentHistory = () => {

    const [products, setProducts] = useState([]);
    const [myProducts, setMyProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

   
    const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(currentUser);

    /*async function fetch(){
      const res = await axios.get(`https://gamingshop-4b668-default-rtdb.europe-west1.firebasedatabase.app/Orders.json`)
        setProducts([res.data]);
    }

    useEffect(()=>{
        fetch();
    },[])


    useEffect(()=>{
        if(products.length>0){
            setMyProducts(products.length > 0 ? Object.values(products[0]) : null);
            if(myProducts){
            const arr = myProducts.filter((product)=> product.id === currentUser.id);
            setFilteredProducts(arr);
            }  
        }
    },[products])*/

    const {data} = useFetchOrders();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    const orders = dataFromHook.filter(book => book.idUser === currentUser.id);

    console.log(dataFromHook);
    console.log(orders);
    return(
        <>
        <MainNavBar />
        <CategoriesNavBar />
        <Container sx={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column', alignItems:'center',marginTop:'70px'}}>
        <Typography sx={{fontFamily:'Montserrat', fontSize:'35px'}}>Historia zakupów</Typography>
        <TableContainer alignItems="center" sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                    <TableHead>
                        <TableRow >
                        <TableCell sx={{width:'10vw'}}>Numer płatności</TableCell>
                        <TableCell sx={{width:'10vw'}}>Data zakupu</TableCell>
                        <TableCell sx={{width:'10vw'}}>Nazwa przedmiotu</TableCell>
                        <TableCell sx={{width:'10vw'}}>Cena przedmiotu</TableCell>
                        <TableCell sx={{width:'10vw'}}>Ilość</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
        {orders !== undefined ? orders.map((item)=>{
            console.log(item);
            return(
    
                        <TableRow>
                            <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'15vw',
                                xs:'20vw'
                            }}}>{item.idOrder}</TableCell>
                            <TableCell sx={{width:'10vw'}}>{item.date}</TableCell>
                           
                                    <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'15vw',
                                xs:'20vw'}}}>{item.content.name}</TableCell>
                                    <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'15vw',
                                xs:'20vw'}}}>{item.content.price}</TableCell>
                                <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'15vw',
                                xs:'20vw'}}}>{item.content.quantity}</TableCell>
                
                        </TableRow>
                    
            )
        }):<Typography>Brak zamówień</Typography>}
        </TableHead>
        </TableContainer>
        </Container>
        </>
    )
}

export default PaymentHistory
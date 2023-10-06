import { Container, Typography, TableContainer, TableHead, TableBody, TableCell, TableRow, useStepContext } from "@mui/material"
import MainNavBar from "../Header/NavBar/MainNavBar";
import CategoriesNavBar from "../Header/NavBar/CategoriesNavBar";
import useFetchOrders from "../../hooks/useFetchOrders";

const PaymentHistory = () => {

    const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    const {data} = useFetchOrders();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    const orders = dataFromHook.filter(book => book.idUser === currentUser.id);

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
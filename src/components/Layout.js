import { Box } from "@mui/material"
import Footer from "./Footer/Footer"
import MainNavBar from "./Header/NavBar/MainNavBar"
import Bestsellers from "./MainContent/Bestsellers"
import VisitedComponent from "./MainContent/VisitedComponent"
import Recommends from "./MainContent/Recommends"
import Promotions from "./MainContent/Promotions"
import CategoriesNavBar from "./Header/CategoriesNavBar"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react"
import { currentUser } from "../Context/currentUser"


const Layout = () => {

    const visitedItem = localStorage.getItem('visitedItem');
    const user = useContext(currentUser);

  
    
    return(
        <Box sx={{backgroundColor: 'rgb(240, 238, 238)'}}>
        <MainNavBar />
        <CategoriesNavBar />
        {visitedItem && <VisitedComponent></VisitedComponent>}
        <Recommends />
        <Promotions />
        <Bestsellers />
        <Footer />
        <ToastContainer />
        </Box>  
    )
}

export default Layout
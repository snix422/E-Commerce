import { Container, Typography, } from "@mui/material"
import ProductItem from "../ProductItem/ProductItem"
import useFetch from "../../hooks/useFetch";

const Promotions = () => {

    const {data} = useFetch();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    const books = dataFromHook.filter(book => book.promocje === true);

    return(
        <Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'flex-start',alignItems:'center', width:'80vw', backgroundColor:'white', borderRadius:'10px', marginTop:'10px',width:{
            xl:'80vw',
            lg:'80vw',
            md:'80vw',
            sm:'90vw',
            xs:'95vw'
        }}}>
            <Typography sx={{marginBottom:'20px', marginTop:'10px', fontFamily:'Montserrat', fontSize:'30px'}}>Promocje</Typography>
            <Container sx={{display:'flex', justifyContent: 'center', gap:'20px', flexWrap: 'wrap'}}>
            { books !== null ? books.map((product)=>{
                return(
                  <ProductItem product={product} />)
            })
            : null}
            </Container>
        </Container>
    )
}

export default Promotions
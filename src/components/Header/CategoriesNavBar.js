import { Container, Stack } from "@mui/material"
import {Link} from "@mui/material"

const CategoriesNavBar = () => {

    const categories = [
        {path:'/headphones', label: 'Słuchawki'},
        {path:'/mouse', label:'Myszki gamingowe'},
        {path:'/mousepad', label:'Podkładki'},
        {path:'/keyboard', label:'Klawiatury'}
    ]
    
    return (
        <Container position="static" sx={{minWidth: '100%', height: '5vh', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <Stack direction={'row'} sx={{gap: {
                xl:'200px',
                lg:'150px',
                md:'100px',
                sm:'50px',
                xs:'20px'
            }, color:'white'}}>
                {categories.map((category=>{
                    return(
                        <Link href={category.path} className='link' sx={{color:'white', textDecoration: 'none'}}>{category.label}</Link>
                    )
                }))}
            </Stack>
        </Container>
    )
}

export default CategoriesNavBar
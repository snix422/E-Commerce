import { Typography, Box, Container,TextField, Button, Alert} from "@mui/material"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { currentUser } from "../../Context/currentUser";
import useSignUpOrSignIn from "../../hooks/useSignUpOrSignIn";

const SignIn = () => {

    const [form, setForm] = useState({
        login:'',
        password:'',
    })
    const [error,setError] = useState('');
    const {formError, loginOrRegistration} = useSignUpOrSignIn();
    
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();
    const user = useContext(currentUser);

    const updateField = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
        console.log(form);
      }

      const validatorUser = () => {
        if(form.login.length === 0){
          return 'Login jest wymagany'
        }else if(form.login.length < 4){
          return 'Login musi posiadać min. 4 znaków'
        }
        if(form.password.length === 0){
         return 'Hasło jest wymagane'
        }else if(form.password.length < 5 ){
          return 'Hasło musi posiadać min. 5 znaków'
        }
        return null
      }
    
    async function LogInUser(){ 
        console.log('Uruchomienie funkcji logowania');
        const errorMsg = validatorUser();
        if(errorMsg){
            setError(errorMsg);
            return
        }
        setError('');
        loginOrRegistration('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCUXA0GqA-e_jHQUUko5UaynHFNfYpOKg',form.login,form.password);
        /*try{
            const res =  await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCUXA0GqA-e_jHQUUko5UaynHFNfYpOKg', {
            email: login,
            password: password,
            returnSecureToken: true
           })
           user.email = res.data.email;
           user.password = password;
           user.idUser = res.data.localId;
           user.auth = true;
           }catch(ex){
            setResponse(ex.response.data.error.message);
            if(response === 'INVALID_PASSWORD' || 'INVALID_EMAIL'){
                setPassword('');
                return
              }
           }*/    
         navigate('/');
    }

    const backtoHome = () => {
        navigate('/')
    }

    const backtoRegister = () => {
        navigate('/rejestracja');
    }

    return(
        <Container sx={{backgroundColor: 'rgb(240, 238, 238)', minWidth: '100vw', height: '100vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{backgroundColor: 'white', width: {
                xl:'60vw',
                lg:'70vw',
                md:'80vw',
                sm:'90vw',
                xs:'95vw'
            }, minHeight: '40vh', borderRadius: '20px', display: 'flex', flexDirection:'column', alignItems:'center', boxShadow: '-6px 5px 21px -7px rgba(8,8,8,1)'}}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '25px', marginBottom: '30px', marginTop:'20px'}}>Logowanie</Typography>
            {error ? <TextField  error helperText={error} value={form.login} name='login' onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  value={form.login} name='login' onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {error ? <TextField type="password" error helperText={error} value={form.password} name="password" onChange={updateField} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField type="password" value={form.password} name="password" onChange={updateField} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {response  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Nieprawidłowe dane logowania!</Typography></Alert> : null }
            <Button color="warning" variant="contained" disableElevation sx={{width: '250px', marginTop:'20px'}} onClick={LogInUser}>Zaloguj się</Button>
            <Typography sx={{marginTop: '10px'}}>Nie masz konta ?</Typography>
            <Button variant="outlined" color="error" sx={{marginTop: '10px'}} onClick={backtoRegister}>Załóż konto</Button>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{marginTop: '50px', marginBottom: '20px' }} onClick={backtoHome}>
                Wróć
            </Button>
            </Box>
        </Container>
    )
}

export default SignIn
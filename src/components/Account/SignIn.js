import { Typography, Box, Container,TextField, Button, Alert} from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useSignUpOrSignIn from "../../hooks/useSignUpOrSignIn";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAccount from "../../hooks/useAccount";

const SignIn = () => {

    const [form, setForm] = useState({
        login:'',
        password:'',
    })
    const [error,setError] = useState({
      login:'',
      pass:''
    });

    const {formError, isError, loginOrRegistration} = useSignUpOrSignIn();
    const navigate = useNavigate();
    const {LogIn, LogOut} = useAccount;

  useEffect(()=>{
    if(isError === false){
      toast.success('Zostałeś wylogowany');
      setTimeout(()=>{
        navigate('/');
      },1000)
    }
  },[isError])


    const updateField = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
        console.log(form);
      }

      const validatorUser = () => {
        if(form.login.length === 0){
          setError(previousState=>{return{...previousState, login:'Login jest wymagany'}})
          return 'Login jest wymagany'
        }else if(form.login.length < 4){
          setError(previousState=>{return{...previousState,login: 'Login musi posiadać min. 4 znaków'}});
          return 'Login musi posiadać min. 4 znaków'
        }
        if(form.password.length === 0){
          setError(previousState=>{return{...previousState, pass: 'Hasło jest wymagane'}});
         return 'Hasło jest wymagane'
        }else if(form.password.length < 5 ){
          setError(previousState=>{return{...previousState, pass: 'Hasło musi posiadać min. 5 znaków'}});
          return 'Hasło musi posiadać min. 5 znaków'
        }
        return null
      }

      async function LogInUser(){ 
        console.log('Uruchomienie funkcji logowania');
        setError({login:'',pass:''})
        let errorMsg = validatorUser();
        if(errorMsg){
          if(errorMsg === 'Login jest wymagany'){
            return
          }else if(errorMsg = 'Login musi posiadać min. 4 znaków'){
            return
          }
          if(errorMsg === 'Hasło jest wymagane'){
            return
          }else if(errorMsg === 'Hasło musi posiadać min. 5 znaków'){
            return
          }
        }
        await loginOrRegistration('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCUXA0GqA-e_jHQUUko5UaynHFNfYpOKg',form.login,form.password);
      
        setError('');
        console.log('zaraz po async')
        console.log(formError);
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
            {error.login ? <TextField  error helperText={error.login} value={form.login} name='login' onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  value={form.login} name='login' onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {error.pass ? <TextField type="password" error helperText={error.pass} value={form.password} name="password" onChange={updateField} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField type="password" value={form.password} name="password" onChange={updateField} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {formError === 'INVALID_EMAIL'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Nieprawidłowy login</Typography></Alert> : null }
             {formError === 'INVALID_PASSWORD'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Nieprawidłowe hasło</Typography></Alert> : null }
            <Button color="warning" variant="contained" disableElevation sx={{width: '250px', marginTop:'20px'}} onClick={LogInUser}>Zaloguj się</Button>
            <Typography sx={{marginTop: '10px'}}>Nie masz konta ?</Typography>
            <Button variant="outlined" color="error" sx={{marginTop: '10px'}} onClick={backtoRegister}>Załóż konto</Button>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{marginTop: '50px', marginBottom: '20px' }} onClick={backtoHome}>
                Wróć
            </Button>
            </Box>
            <ToastContainer />
        </Container>
    )
}

export default SignIn
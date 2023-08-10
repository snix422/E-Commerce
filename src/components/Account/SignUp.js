import { Typography, Box, Container, TextField, Button, Alert } from "@mui/material"
import { useContext, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { registerUsers } from "../../Context/registerUsers";
import useSignUpOrSignIn from "../../hooks/useSignUpOrSignIn";


const SignUp =  () => {
   
   
    const [error,setError] = useState({
        login:'',
        pass:''
      });
    const [form, setForm] = useState({
        login:'',
        pass:''
    })
    const {formError, isError, loginOrRegistration} = useSignUpOrSignIn();

    const navigate = useNavigate();
    const registers = useContext(registerUsers);

    useEffect(()=>{
        if(isError === false){
          navigate('/');
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
        if(form.pass.length === 0){
          setError(previousState=>{return{...previousState, pass: 'Hasło jest wymagane'}});
         return 'Hasło jest wymagane'
        }else if(form.pass.length < 5 ){
          setError(previousState=>{return{...previousState, pass: 'Hasło musi posiadać min. 5 znaków'}});
          return 'Hasło musi posiadać min. 5 znaków'
        }
        return null
      }

  
    const RegisterUser = async () => {
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

          await loginOrRegistration('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCUXA0GqA-e_jHQUUko5UaynHFNfYpOKg',form.login,form.pass);
          setError('');
    }

    const backtoHome = () => {
        navigate('/')
    }

    const backToLogin = () => {
        navigate('/zaloguj')
    }

    return(
        <Container sx={{backgroundColor: 'rgb(240, 238, 238)', minWidth: '100vw', height: '100vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{backgroundColor: 'white', width: '50vw', minHeight: '40vh', borderRadius: '20px', display: 'flex', flexDirection:'column', alignItems:'center', boxShadow: '-6px 5px 21px -7px rgba(8,8,8,1)'}}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '25px', marginBottom: '30px', marginTop:'20px'}}>Rejestracja</Typography>
            {error.login ? <TextField  name="login" error helperText={error.login} value={form.login} onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  name="login" value={form.login} onChange={updateField} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {error.pass ? <TextField name="pass" type="password" error helperText={error.pass} value={form.password} onChange={updateField} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField name="pass" type="password" value={form.password} onChange={updateField} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {formError === 'EMAIL_EXISTS'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Ten mail jest już używany!</Typography></Alert> : null }
             {formError === 'INVALID_EMAIL'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>E-Mail jest nieprawidłowy!</Typography></Alert> : null }<Button color="warning" variant="contained" disableElevation sx={{width: '250px', marginTop:'20px'}} onClick={RegisterUser}>Zarejestruj się</Button>
            <Typography sx={{marginTop: '10px'}}>Masz konto ?</Typography>
            <Button variant="outlined" color="success" sx={{marginTop: '10px'}} onClick={backToLogin}>Zaloguj się</Button>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{marginTop: '50px', marginBottom:'20px' }} onClick={backtoHome}>
                Wróć
            </Button>
            </Box>
        </Container>
    )
}

export default SignUp

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import { API_CLIENT } from '../../shared/services/api-client';
export const Login = ()=>{
    const [msg,setMsg] =useState('');
    const userid = useRef('');
    const pwd = useRef('');
    const doLogin = async ()=>{
        const uid = userid.current.value;
        const password= pwd.current.value;

        const userObject = {'userid':uid, 'password':password};
        console.log('UserObject is ', userObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN_URL, userObject);    
        setMsg(result.data.message);    
    }
        catch(err){
            console.log('Error in Login Call ', err);
        }
    }
    return (
     <Container maxWidth="sm">
        <h1>Login</h1>
        <h4>{msg}</h4>
     <Box sx={{  height: '100vh' }} >
     <TextField inputRef = {userid} id="outlined-basic" label="Userid" variant="outlined" />
     <TextField inputRef = {pwd} id="outlined-basic" type="password" label="Password" variant="outlined" />
     <br/> 
     <Button onClick = {doLogin} variant="contained">Login</Button>
        </Box>
     </Container>
    )
}
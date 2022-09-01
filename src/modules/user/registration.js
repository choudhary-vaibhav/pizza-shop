import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import { API_CLIENT } from '../../shared/services/api-client';
export const Register = ()=>{
    const [msg,setMsg] =useState('');
    const userid = useRef('');
    const pwd = useRef('');
    const phoneno = useRef('');
    const doLogin = async ()=>{
        const uid = userid.current.value;
        const password= pwd.current.value;
        const pno = phoneno.current.value;

        const userObject = {'userid':uid, 'password':password, 'phoneno':pno};
        console.log('UserObject is ', userObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_REGISTER_URL, userObject);    
        setMsg(result.data.message);    
    }
        catch(err){
            console.log('Error in Registration Call ', err);
        }
    }
    return (
     <Container maxWidth="sm">
        <h1>Register</h1>
        <h4>{msg}</h4>
     <Box sx={{  height: '100vh' }} >
     <TextField inputRef = {userid} id="outlined-basic" label="Userid" variant="outlined" />
     <TextField inputRef = {pwd} id="outlined-basic" type="password" label="Password" variant="outlined" />
     <TextField inputRef = {phoneno} id="outlined-basic" type="text" label="PhoneNo" variant="outlined" />
     <br/> 
     <Button onClick = {doLogin} variant="contained">Register</Button>
        </Box>
     </Container>
    )
}
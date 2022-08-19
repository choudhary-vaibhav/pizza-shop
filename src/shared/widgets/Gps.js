import * as React from 'react';
import { useState } from "react";
import { nativeOperations } from "../services/native";
import { Map } from "./Map";
import loadingImage from '../../assets/images/loading.gif';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Gps = () => {
    const [pos, setPos] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const successFn = (pos) =>{
        console.log("success...", pos);
        setPos(pos);
        setVisible(true);
        setLoading(false);
    }

    const failFn = (err) =>{
        console.log("fail...", err);
    }

    const locateLocation = () => {
        setLoading(true);
        console.log("Code starts...");
        nativeOperations.gps(successFn, failFn);
        console.log("Code ends...");
    }

    return <>
     
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
            <Box sx={{ height: '100vh', }} >
                {visible?<Map pos = {pos}/> :
                <Button sx={{marginLeft:25, marginTop:5}} onClick={locateLocation} variant="contained">Locate Me</Button>
                }
            </Box>
            </Container>
        </React.Fragment>
    
        {loading?<img src={loadingImage}/> : <></>}
    </>

}
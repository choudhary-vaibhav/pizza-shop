import * as React from 'react';
import { useEffect, useState, } from "react"
import { API_CLIENT } from "../services/api-client";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export const MediaCard = () => {

    const [veg, setVeg] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
         //console.log(process.env.REACT_APP_MENU_URL);
         const promise = API_CLIENT.get(process.env.REACT_APP_PIZZA_URL);
         promise.then(result=>{

                setVeg(result.data['Vegetarian']);
                setLoading(false);
                
 
         }).catch(err=>console.log('Network Err ', err));
     },[]);

     const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      //console.log(veg[0].assets.menu[0].url);

      const createCard = (value) => {
        return <>
            {/* <Grid container spacing={2}>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            </Grid> */}
            
            <Grid item xs={6} sm={4} md={4}>
                {/* <Item> */}
                <Card sx={{ maxWidth: 300, margin:1 }} variant="outlined">{cardinternal(value)}</Card>
                {/* </Item> */}
            </Grid>
            
            
        </>
        
      }

      const cardinternal = (value) => {
        return <>
                <CardMedia
                     component="img"
                     height="100"
                     image= {value.assets.menu[0].url}
                     alt="veg pizza"
                     />
                     <CardContent>
                     <Typography gutterBottom variant="h6" component="div">
                            {value.name}
                
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {value.menu_description}
                        </Typography>
                        <CardActions>
                            <Button size="small">Add To Cart</Button>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </CardContent>
            
            
                        
        </>
      }
    return <>
    { loading?
                <Box>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            :
            <div>
                        
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {veg.map( value => createCard(value) )}
                    </Grid>
                </Box>

            </div>
    }
    </>
}
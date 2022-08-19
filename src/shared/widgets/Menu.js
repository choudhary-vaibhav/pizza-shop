import * as React from 'react';
import { useEffect, useState, } from "react"
import { API_CLIENT } from "../services/api-client";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const Menu = ()=>{
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [tabValue, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
       // console.log(process.env.REACT_APP_MENU_URL);
        const promise = API_CLIENT.get(process.env.REACT_APP_MENU_URL);
        promise.then(data=>{

            setCategory(data.data['category']);
            setLoading(false);

        }).catch(err=>console.log('Network Err ', err));
    },[]);

    return <>
            
            {loading?
                <Box>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            : 
                <Box sx={{ bgcolor: 'background.paper', }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="menu bar"
                    >
                        {category.map(value => {
                            return (
                            <Tab sx={{
                                fontSize:10,
                            }} key={value.name} label={value.name}>
                            </Tab>
                            );
                        })}
                    </Tabs>
                    </Box>
            }
            
        </>
}
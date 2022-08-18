import { useState } from "react";
import { nativeOperations } from "../services/native";
import { Map } from "./Map";
import loadingImage from '../../assets/images/loading.gif';

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
    {loading?<img src={loadingImage}/> : <></>}
    {visible?<Map pos = {pos}/> : <button onClick={locateLocation}>Locate Me</button>}
    
    </>

}
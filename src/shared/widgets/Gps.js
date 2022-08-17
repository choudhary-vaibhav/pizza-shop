import { nativeOperations } from "../services/native";

export const Gps = () => {
    const successFn = (pos) =>{
        console.log("sucess...", pos);
    }

    const failFn = (err) =>{
        console.log("fail...", err);
    }

    const locateLocation = () => {
        console.log("Code starts...");
        nativeOperations.gps(successFn, failFn);
        console.log("Code ends...");
    }

    return <button onClick={locateLocation}>Locate Me</button>
}
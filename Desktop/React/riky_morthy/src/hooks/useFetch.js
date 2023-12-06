import axios from "axios";
import { useState } from "react";


const useFetch = (url) =>{
    const [hasError, setHasError] = useState(false);
    const [infoApi, setInfoApi] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const getApi = ()=>{
        axios.get(url)
        .then(res => {
        setIsLoading(true);
        setInfoApi(res.data)
        setHasError(false);
        })
        .catch(err => {
        console.log(err)
        setHasError(true)})
        .finally(setIsLoading(false));
    }
    
    return [infoApi, getApi, hasError]
}

export default useFetch;
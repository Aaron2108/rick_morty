import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setinfoApi] = useState()

    //READ
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(res => setinfoApi(res.data))
        .catch(err => console.log(err))
    }

    //CREATE
    const postApi = (path,data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setinfoApi([...infoApi, res.data])
        })
        .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then(res => {
            console.log(res.data);
            setinfoApi(infoApi.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
        .then(res => {
            console.log(res.data)
            setinfoApi(infoApi.map(e => e.id === id ? res.data : e))
        })
        .catch(err => console.log(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}
export default useFetch
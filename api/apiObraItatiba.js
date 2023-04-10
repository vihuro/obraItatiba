import axios from "axios";
import { parseCookies } from "nookies";

const ApiObra = axios.create({

    baseURL: "http://192.168.1.10:9001/api"
})

ApiObra.interceptors.request.use((request) => {
    const token = parseCookies("TOKEN_OBRA");
    if(token){
        request.headers.Authorization = `Bearer ${token.TOKEN_OBRA}`;
    } return request;
})

export default ApiObra;


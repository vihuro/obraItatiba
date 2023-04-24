import axios from "axios";
import { parseCookies } from "nookies";

const ipAddress = process.env.REACT_APP_IP_ADDRESS || "192.168.1.227";

let baseURL = "";


function setBaseURL(req){
    console.log(req)
}

const ApiObra = axios.create({

    baseURL: "http://192.168.1.227:9090"
})

ApiObra.interceptors.request.use((request) => {
    const token = parseCookies("TOKEN_OBRA");
    if (token) {
        request.headers.Authorization = `Bearer ${token.TOKEN_OBRA}`;
    } return request;
})

export default ApiObra;
export {setBaseURL}


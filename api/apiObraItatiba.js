import axios from "axios";
import { parseCookies } from "nookies";

const ipAddress = process.env.REACT_APP_IP_ADDRESS || "192.168.1.227";

let baseURL = "";

if (ipAddress.startsWith("192.168.1.227")) {
    console.log(ipAddress)
    baseURL = `http://${ipAddress}:9090/api`;
} else if (ipAddress.startsWith("189.1.166.143")) {
    console.log(ipAddress)
    baseURL = `http://${ipAddress}:9090/api`;
}

const ApiObra = axios.create({

    baseURL: baseURL
})

ApiObra.interceptors.request.use((request) => {
    const token = parseCookies("TOKEN_OBRA");
    if (token) {
        request.headers.Authorization = `Bearer ${token.TOKEN_OBRA}`;
    } return request;
})

export default ApiObra;


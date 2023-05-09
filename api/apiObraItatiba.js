import axios from "axios";
import { parseCookies } from "nookies";


let BASE_URL = "";

const ApiObra = axios.create()


function setBaseURL(url){

    // BASE_URL = "http://192.168.1.227:9090/api"

    if(url.startsWith("192")){
        BASE_URL = "http://192.168.1.227:9090/api"
    }else if(url.startsWith("189")){
        BASE_URL = "http://189.1.166.143:9090/api"
    }else{
        BASE_URL = "http://192.168.1.227:9090/api"
    }

    // ApiObra.defaults.baseURL = "http://localhost:9000/api";

     ApiObra.defaults.baseURL = BASE_URL;

}
if (typeof window !== "undefined") {
    setBaseURL(window.location.hostname);
  }

ApiObra.interceptors.request.use((request) => {
    const token = parseCookies("TOKEN_OBRA");
    if (token) {
        request.headers.Authorization = `Bearer ${token.TOKEN_OBRA}`;
    } return request;
})

export default ApiObra;
export {setBaseURL}


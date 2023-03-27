import axios from "axios";

const ApiObra = axios.create({
    baseURL: "http://10.10.11.194:9000/api"
})

export default ApiObra
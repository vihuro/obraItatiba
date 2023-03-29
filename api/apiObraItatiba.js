import axios from "axios";

const ApiObra = axios.create({

    baseURL: "http://192.168.0.175:9000/api"
})

export default ApiObra
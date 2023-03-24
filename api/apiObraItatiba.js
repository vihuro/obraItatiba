import axios from "axios";

const ApiObra = axios.create({
    baseURL: "http://localhost:5215/api"
})

export default ApiObra
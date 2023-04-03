import axios from "axios";

const ApiObra = axios.create({

    baseURL: "http://localhost:9001/api"
})

export default ApiObra;
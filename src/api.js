import axios from "axios";

const api = axios.create({
    baseURL: "https://api-contato-escape.herokuapp.com/"
})

export default api;
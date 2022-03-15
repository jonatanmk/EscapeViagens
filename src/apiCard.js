import axios from "axios";

const apiCard = axios.create({
    baseURL: "http://localhost:8080"
})

export default apiCard;
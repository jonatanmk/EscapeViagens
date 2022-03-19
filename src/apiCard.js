import axios from "axios";

const apiCard = axios.create({
    baseURL: "https://app-card-escape.herokuapp.com/"
})

export default apiCard;
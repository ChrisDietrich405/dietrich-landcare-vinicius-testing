import axios from "axios";

export const servicesAPI = axios.create({
    baseURL: "http://localhost:3001/api/getServices", 
});
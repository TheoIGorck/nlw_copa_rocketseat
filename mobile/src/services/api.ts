import axios from "axios";

export const api = axios.create({
    baseURL: 'http://meuIP:3434'
})
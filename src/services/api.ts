import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.19.3.14:3333'
})

export {api}
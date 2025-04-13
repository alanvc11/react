import axios from "axios";

// Configurando a API
const api = axios.create({
    baseURL: 'http://localhost:3002',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
import axios from "axios";

// Rodar com IPV4: json-server --watch -d --host 192.168.1.42


const api = axios.create({
  baseURL: "http://192.168.1.42:3000"
})

export default api;
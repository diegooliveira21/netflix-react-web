import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://8zgbq72yka.execute-api.us-east-1.amazonaws.com/dev/',
})

export default axiosInstance

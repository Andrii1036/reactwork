import axios from "axios";
import baseUrl from "../config/Urls";

const axiosService = axios.create({
    baseURL: baseUrl
});

export default axiosService
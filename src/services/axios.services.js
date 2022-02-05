import axios from "axios";
import baseUrl from "../config/url";

const axiosServices = axios.create({
    baseURL: baseUrl
});

export default axiosServices;
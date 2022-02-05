import axiosServices from "./axios.services";
import baseUrl from "../config/url";

export const imagesServices = {
    getImage: (endpoint) => axiosServices.get(`${baseUrl}/${endpoint}`).then(value => value.request.responseURL)
}
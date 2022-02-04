import axiosService from "./axios.service";
import {endpoint} from "../config/Urls";

export const userService = {
    getAll: () => axiosService.get(endpoint.users).then(value => value.data),
    getById: (id) => axiosService.get(`${endpoint.users}/${id}`).then(value => value.data)
};
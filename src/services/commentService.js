import axiosService from "./axios.service";
import {endpoint} from "../config/Urls";

export const commentService = {
    getAll: () => axiosService.get(endpoint.comments).then(value => value.data),
    getById: (id) => axiosService.get(`${endpoint.comments}/${id}`).then(value => value.data),
    getByPost: (id) => axiosService.get(`${endpoint.posts}/${id}${endpoint.comments}`).then(value => value.data)
};
